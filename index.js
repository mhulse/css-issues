// jshint ignore: start

const octokit = require('@octokit/rest')();
const fs = require('fs');
const config = require('./config.json');

if (config.password) {
    octokit.authenticate({
        type: 'basic',
        username: 'mhulse',
        password: config.password
    });
} else {
    console.log('Password needed!');
}

async function getIssues(method) {
    let response = await method({
        per_page: 100,
        owner: 'mhulse',
        repo: 'css-bullets',
        // milestone,
        state: 'open',
        // assignee,
        // creator,
        // per_page,
        labels: 'readme'
        // sort,
        // direction,
        // since,
        // page,
        // mentioned
    });
    let {data} = response;
    while (octokit.hasNextPage(response)) {
        response = await octokit.getNextPage(response);
        data = data.concat(response.data);
    }
    return data;
};

getIssues(octokit.issues.getForRepo)
    .then(data => {

        let links = [];
        let sorted = data.sort(function(a, b) {
            return a.title.toUpperCase() > b.title.toUpperCase() ? 1:-1;
        });

        Object.keys(data).forEach(function(key) {

            links.push(`- [${data[key].title}](${data[key].html_url})`);

        });

        fs.writeFile('README.md', links.join('\n'), (err) => {
            if (err) throw err;
            console.log("The file was succesfully saved!");
        });

    });

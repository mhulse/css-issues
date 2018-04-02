// jshint ignore: start


//
//
//
//
//
//
//
//
// WARNING …
// This code written on a Sunday, several brews deep.
// Code could be much better … This is proof of concept!
// As always … PRs welcome!
//
//
//
//
//
//
//
//

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

async function getLabels() {
    let response = await octokit.issues.getLabels({
        owner: 'mhulse',
        repo: 'css-bullets',
        // page,
        per_page: 100,
        headers: {
          accept: 'application/vnd.github.symmetra-preview+json'
        }
    });
    let {data} = response;
    while (octokit.hasNextPage(response)) {
        response = await octokit.getNextPage(response);
        data = data.concat(response.data);
    }
    return data;
};

async function getIssues(label) {
    let response = await octokit.issues.getForRepo({
        owner: 'mhulse',
        repo: 'css-bullets',
        // milestone,
        state: 'open',
        // assignee,
        // creator,
        // per_page,
        labels: [
            'readme',
            label,
        ].join(','),
        // sort,
        // direction,
        // since,
        // page,
        per_page: 100,
        // mentioned
    });
    let {data} = response;
    while (octokit.hasNextPage(response)) {
        response = await octokit.getNextPage(response);
        data = data.concat(response.data);
    }
    return data;
};

// Blank the file:
fs.writeFileSync('README.md', '');

getLabels()
    .then(labels => {

        labels.sort(function(a, b) {
            return (a.name.toUpperCase() > b.name.toUpperCase() ? 1:-1);
        });

        Object.keys(labels).forEach(function(labels_key) {

            let label = labels[labels_key];
            let label_name = label.name;

            console.log(label_name);

            label_name = ((label_name != 'README') ? label_name : '');

            getIssues(label_name)
                .then(issues => {

                    if (issues.length) {

                        label_name = (label_name || 'Uncategorized');

                        let links = [];
                        issues.sort(function(a, b) {
                            return (a.title.toUpperCase() > b.title.toUpperCase() ? 1:-1);
                        });
                        let table = '\n\n' + 'Tip | Issue #\n--- | ---\n';

                        table = '\n\n## ' + label_name + table;

                        Object.keys(issues).forEach(function(issues_key) {

                            links.push(`[${issues[issues_key].title}](${issues[issues_key].html_url}) | ${issues[issues_key].number}`);

                        });

                        table += links.join('\n');

                        fs.appendFileSync('README.md', table);

                    }

                })

        });

    });

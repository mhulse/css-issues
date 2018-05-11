// jshint ignore: start

const octokit = require('@octokit/rest')();
const groupby = require('json-groupby');
const sortkeys = require('sort-keys');
const delval = require('object-delete-value')
const fs = require('fs');
const config = require('./config.json');
const package = require('./package.json');

if (config.password) {
    octokit.authenticate({
        type: 'basic',
        username: 'mhulse',
        password: config.password
    });
} else {
    console.log('Password needed!');
}

async function getIssues(labels = []) {
    let response = await octokit.issues.getForRepo({
        owner: 'mhulse',
        repo: 'pragmatic-css',
        // milestone,
        state: 'open',
        // assignee,
        // creator,
        // per_page,
        labels: labels.join(','),
        // sort,
        // direction,
        // since,
        // page,
        per_page: 100,
        // mentioned
        headers: {
          accept: 'application/vnd.github.symmetra-preview+json'
        },
    });
    let {data} = response;
    while (octokit.hasNextPage(response)) {
        response = await octokit.getNextPage(response);
        data = data.concat(response.data);
    }
    return data;
};

getIssues([
    'README'
]).then(issues => {

    if (issues.length) {

        let issues_grouped = groupby(issues, ['labels.name']);
        let issues_sorted = sortkeys(issues_grouped);
        let issues_sorted_copy = JSON.parse(JSON.stringify(issues_sorted)); // Deep copy.
        let output = '';
        let issues_found = [];

        output += `# ${package.title}\n`

        output += `\n**${package.description}**\n`

        Object.keys(issues_sorted).forEach(issue => {

            if (issue != 'README') {

                output += ('\n\n## ' + issue);

                output += ('\n\n' + 'Description | Issue #\n:-- | :--');

                Object.keys(issues_sorted[issue]).forEach(issues_key => {

                    issues_key = issues_sorted[issue][issues_key];

                    issues_found.push(issues_key.number);

                    output += (`\n[${issues_key.title}](${issues_key.html_url}) | ${issues_key.number}`);


                });

            }

        });

        output += ('\n\n## Uncategorized');

        output += ('\n\n' + 'Description | Issue #\n:-- | :--');

        Object.keys(issues_sorted_copy['README']).forEach(issues_key => {

            issues_key = issues_sorted_copy['README'][issues_key];

            if ( ! issues_found.includes(issues_key.number)) {

                output += (`\n[${issues_key.title}](${issues_key.html_url}) | ${issues_key.number}`);

            }

        });

        fs.writeFileSync('README.md', output);

    }

});

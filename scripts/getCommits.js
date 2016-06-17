#!/usr/bin/env node

var childProcess = require('child_process');
var execSync = childProcess.execSync;
var fs = require('fs');

var commitsAsText = execSync('git log --pretty=format:"%H,%ct" index.html', {
  cwd: `${__dirname}/../web-audio-api/`
}).toString();

var commits = commitsAsText.split('\n').map((line) => {
  var items = line.split(',');
  return {
    hash: items[0],
    time: parseInt(items[1], 10)
  };
});

var commitsStringified = JSON.stringify(commits, null, '\t');

// write files
fs.writeFileSync('./data/commits.txt', commitsAsText, 'utf-8');
fs.writeFileSync('./data/commits.json', commitsStringified, 'utf-8');

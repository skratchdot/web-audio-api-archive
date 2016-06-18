#!/usr/bin/env node
const childProcess = require('child_process');
const execSync = childProcess.execSync;
const fs = require('fs');
const gitDir = `${__dirname}/../web-audio-api/`;

const gitLog = function (format, path, max) {
  return execSync(`git log --pretty=format:"${format}" -n ${max} ${path}`, {
    cwd: gitDir
  }).toString().trim();
};

const commitsAsText = gitLog('%H,%ct', 'index.html', 10000);

const commits = commitsAsText.split('\n').map((line) => {
  const items = line.split(',');
  const hash = items[0];
  const time = parseInt(items[1], 10);
  const name = gitLog('%cn', hash, 1);
  const email = gitLog('%ce', hash, 1);
  const subject = gitLog('%s', hash, 1);
  const body = gitLog('%b', hash, 1);
  return { hash, time, name, email, subject, body };
});

const commitsStringified = JSON.stringify(commits, null, '\t');

// write files
fs.writeFileSync('./data/commits.txt', commitsAsText, 'utf-8');
fs.writeFileSync('./data/commits.json', commitsStringified, 'utf-8');
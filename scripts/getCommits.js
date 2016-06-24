#!/usr/bin/env node
const childProcess = require('child_process');
const crypto = require('crypto');
const execSync = childProcess.execSync;
const fs = require('fs');
const ProgressBar = require('progress');
const gitDir = `${__dirname}/../web-audio-api/`;
const errors = [];

const gitLog = function (format, path, max) {
  return execSync(`git log --pretty=format:"${format}" -n ${max} ${path}`, {
    cwd: gitDir
  }).toString().trim();
};

const gitShow = function (tree, path) {
  return execSync(`git show ${tree}:${path}`, {
    cwd: gitDir,
    stdio: ['pipe', 'pipe', 'ignore']
  }).toString();
};

const writeArchives = function (tree, path) {
  let success = false;
  try {
    const contents = gitShow(tree, path);
    const filePrefix = `./data/archives/${tree}`;
    fs.writeFileSync(`${filePrefix}.html`, contents, 'utf-8');
    success = true;
  } catch (e) {
    errors.push({
      tree: tree,
      msg: e.message
    });
  }
  return success;
};

const commitsAsText = gitLog('%H,%ct', '', 10000);
const lines = commitsAsText.split('\n');
const format = '[:bar] :hash (:current of :total) :percent :elapseds :etas';
const bar = new ProgressBar(format, {
  total: lines.length,
  width: 15
});

const commits = lines.map((line) => {
  const items = line.split(',');
  const hash = items[0];
  const time = parseInt(items[1], 10);
  const name = gitLog('%cn', hash, 1);
  const email = gitLog('%ce', hash, 1);
  const subject = gitLog('%s', hash, 1);
  const body = gitLog('%b', hash, 1);
  // create md5 hash of email
  const md5Hash = crypto.createHash('md5');
  md5Hash.update(email.trim().toLowerCase());
  const md5 = md5Hash.digest('hex');
  let index = null;
  if (writeArchives(hash, 'index.html')) {
    index = 'index.html';
  } else if (writeArchives(hash, 'webaudio/specification.html')) {
    index = 'webaudio/specification.html';
  }
  bar.tick(1, { hash: hash.slice(0, 6) });
  return { hash, time, name, email, md5, subject, body, index };
});

const commitsStringified = JSON.stringify(commits, null, '\t');
const errorsStringified = JSON.stringify(errors, null, '\t');

// write files
fs.writeFileSync('./data/commits.txt', commitsAsText, 'utf-8');
fs.writeFileSync('./data/commits.json', commitsStringified, 'utf-8');
fs.writeFileSync('./data/errors.json', errorsStringified, 'utf-8');

#! /bin/bash

rm -rf deploy
git clone --branch gh-pages --single-branch --depth 1 https://${GH_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git deploy

cd deploy/
git rm -rf ${TRAVIS_BRANCH}
mkdir ${TRAVIS_BRANCH}
cp ../dist/* ${TRAVIS_BRANCH}

git config user.name "TravisCI"
git config user.email "travis@travisci.org"
git config --global push.default simple

git add -A
git commit -m "${TRAVIS_BRANCH} version updated"

git push --force --quiet

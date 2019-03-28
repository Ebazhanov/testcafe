# qa-testcafe-experiment

The purpose of this repo is to play with [TestCafe tool](https://devexpress.github.io/testcafe/) to understand if it worth using for automated e2e cross-browser testing in MYCS.

### Requirements

It should be able

- [ ] to run tests in different desktop browsers locally
- [ ] to run tests on mobile device connected via wire
- [ ] to run tests in mobile simulator
- [x] to run tests using cloud services
- [ ] to run tests in parallel

## Getting started

### Requirements

- Installed npm. Get it [here](https://www.npmjs.com/get-npm)

### Run locally

Clone repo:

```ShellSession
git clone https://github.com/mycsHQ/qa-testcafe-experiment.git
```

Install all dependencies

```ShellSession
npm install
```

Command to run test is written in `app/package.json`. Run it using

```JavaScript
npm test
```

## Symlink

To avoid ugly path when importing modules like this

```JavaScript
import Page from '../../../page-objects/product-details-page';
```

Symlink was added. `app` is the top project directory and contains all files, so now import will look like this

```JavaScript
import Page from 'app/page-objects/product-details-page';
```
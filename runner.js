const createTestCafe = require('testcafe');
const glob = require('glob');

let runner = null;
let testcafe = null;

const getTests = suite => {
  return new Promise(resolve => {
    glob(suite, (er, files) => resolve(files));
  });
};

const runOptions = {
  debug: true,
  skipJsErrors: true,
  quarantineMode: false,
  startFullscreen: true,
  selectorTimeout: 75000,
  assertionTimeout: 50000,
  pageLoadTimeout: 180000,
  inspect: true,
  speed: 1,
};

const runTest = suite => {
  let failedCount = 0;

  createTestCafe(null, 1337, 1338)
    .then(tc => {
      testcafe = tc;
      runner = testcafe.createRunner();
      runner.screenshots('reports/screenshots/', true);
    })
    .then(() => {
      return getTests(suite);
    })
    .then(testFiles => {
      return runner
        .src(testFiles)
        .browsers('chrome --no-sandbox')
        .concurrency(1)
        .run(runOptions)
        .then(actualFailedCount => {
          failedCount = actualFailedCount;
          console.log(failedCount); // eslint-disable-line
          return testcafe.close();
        });
    })
    .then(() => process.exit(failedCount))
    .catch((err) => {
      console.error(err);
      process.exit(failedCount);
    });
};

const suites = {
  suite2: './tests/configurators/shelf/*.js'
};

runTest(suites.suite2);

// INTENTIONAL BUG: Missing lodash dependency
// This will fail because lodash is not in package.json

const _ = require('lodash'); // This will cause error

function processData(data) {
  return _.map(data, item => ({
    ...item,
    processed: true
  }));
}

function filterData(data, condition) {
  return _.filter(data, condition);
}

function sortData(data, key) {
  return _.sortBy(data, key);
}

module.exports = {
  processData,
  filterData,
  sortData
};

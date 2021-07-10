const domainAggregate = require('../entities/domain/domainAggregate');

function getDomains() {
  return domainAggregate.get();
}

module.exports = getDomains;

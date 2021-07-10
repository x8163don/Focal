const domainAggregate = require('../entities/domain/domainAggregate');

function addDomain(domain) {
  domainAggregate.add(domain);
}

module.exports = addDomain;

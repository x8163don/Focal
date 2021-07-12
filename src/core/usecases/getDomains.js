const { getDomainAggregate } = require('../entities/domain/domainAggregate');

module.exports = class GetDomainsUseCase {
  getDomains = () => getDomainAggregate().get()
};

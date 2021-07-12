const { getDomainAggregate } = require('../entities/domain/domainAggregate');

module.exports = class AddDomainUseCase {
  constructor(domainRepository) {
    this.domainRepository = domainRepository;
  }

  addDomain(domain) {
    getDomainAggregate().add(domain);

    this.domainRepository.saveDomains(getDomainAggregate().domains);
  }
};

const { getDomainAggregate } = require('../entities/domain/domainAggregate');

module.exports = class InitDomainsUseCase {
  constructor(domainRepository) {
    this.domainRepository = domainRepository;
  }

  initDomains = async () => {
    const domains = await this.domainRepository.getDomains();
    console.log(domains);
    getDomainAggregate(domains);
  }
};

module.exports = class DomainController {
  constructor({ initDomainsUseCase, addDomainUseCase, getDomainsUseCase }) {
    this.initDomainsUseCase = initDomainsUseCase;
    this.addDomainUseCase = addDomainUseCase;
    this.getDomainsUseCase = getDomainsUseCase;
  }

  async initDomains() {
    await this.initDomainsUseCase.initDomains();
  }

  addDomain(domain) {
    this.addDomainUseCase.addDomain(domain);
  }

  getDomains() {
    return this.getDomainsUseCase.getDomains();
  }
};

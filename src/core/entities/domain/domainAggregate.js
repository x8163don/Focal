class DomainAggregate {
  constructor(domains) {
    this.domains = domains || [];
  }

  add(domain) {
    this.domains.push(domain);
  }

  get() {
    return this.domains;
  }
}

this.domainInstance = undefined;
const getDomainAggregate = (domains = []) => {
  if (!this.domainInstance) {
    this.domainInstance = new DomainAggregate(domains);
  }
  return this.domainInstance;
};

module.exports = { getDomainAggregate };

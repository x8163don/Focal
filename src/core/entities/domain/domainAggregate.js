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

const domainInstance = new DomainAggregate();

module.exports = domainInstance;

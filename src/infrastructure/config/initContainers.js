const DomainController = require('../../interfaces/controller/domain');
const InitDomainsUseCase = require('../../core/usecases/initDomains');
const AddDomainUseCase = require('../../core/usecases/addDomain');
const GetDomainsUseCase = require('../../core/usecases/getDomains');
const DomainRepository = require('../repositories/domain/domainRepository');

export const containers = {};

export const initContainers = () => {
  const domainRepository = new DomainRepository();
  const initDomainsUseCase = new InitDomainsUseCase(domainRepository);
  const addDomainUseCase = new AddDomainUseCase(domainRepository);
  const getDomainsUseCase = new GetDomainsUseCase();

  const domainController = new DomainController({
    initDomainsUseCase,
    addDomainUseCase,
    getDomainsUseCase,
  });

  containers.domainController = domainController;
};

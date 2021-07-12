const { containers, initContainers } = require('./infrastructure/config/initContainers');
const EVENT_NAMES = require('./infrastructure/constants/eventName');

chrome.runtime.onInstalled.addListener(async () => {
  initContainers();
  await containers.domainController.initDomains();
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.eventName === EVENT_NAMES.ADD_DOMAIN) {
    console.log(containers);
    containers.domainController.addDomain(...request.params);
  }

  if (request.eventName === EVENT_NAMES.GET_DOMAINS) {
    sendResponse(containers.domainController.getDomains());
  }
});

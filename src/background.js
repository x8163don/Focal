const addDomain = require('./core/usecases/addDomain');
const getDomains = require('./core/usecases/getDomains');

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({
    isOpen: false,
    domains: [],
  }, () => {
    console.log('Init data');
  });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.eventName === 'AddDomain') {
    addDomain.call(this, ...request.params);
  }

  console.log(getDomains());
});

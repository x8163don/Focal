// const addDomain = require('./core/usecases/addDomain');
// const getDomains = require('./core/usecases/getDomains');

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request.eventName);
});

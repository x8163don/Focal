module.exports = class LocalStorageDomainRepository {
  getDomains = () => new Promise((resolve, reject) => {
    try {
      chrome.storage.local.get(['domains'], (localData) => {
        resolve(localData.domains);
      });
    } catch (e) {
      reject(e);
    }
  });

  saveDomains = (domains) => {
    chrome.storage.local.set({ domains });
  }
};

function onLinkClick(info, tab) {
  function openNewTab(items) {
    chrome.tabs.create({
      url: items.proxy + "?target=" + info.linkUrl
    });
  }

  var defaultProxy = 'http://EXAMPLE.amazonaws.com'
  chrome.storage.sync.get({proxy: defaultProxy}, openNewTab);
}

var id = chrome.contextMenus.create({
  "id": "remote-viewing-context-menu",
  "title": "Open link in new remote viewing tab",
  "contexts": ["link"]
});
console.log(id);

chrome.contextMenus.onClicked.addListener(onLinkClick);

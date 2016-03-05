function onLinkClick(info, tab) {
  chrome.tabs.create({
    url: info.linkUrl
  });
}

var id = chrome.contextMenus.create({
  "id": "remote-viewing-context-menu",
  "title": "Open link in new remote viewing tab",
  "contexts": ["link"]
});
console.log(id);

chrome.contextMenus.onClicked.addListener(onLinkClick);

function restoreOptions() {
  var defaultProxy = 'http://EXAMPLE.amazonaws.com'
  chrome.storage.sync.get({proxy: defaultProxy}, setOptions);
}

function showOptionsSaved() {
  document.getElementById('status').textContent = 'Options saved.';
}

function saveOptions() {
  var proxy = document.getElementById('proxy').value;
  //TODO: Ensure proxy URL matches the pattern: 'http://.*.amazonaws.com'
  //if (/^http:\/\/\w+.amazonaws.com$/.test(proxy)){
      chrome.storage.sync.set({proxy: proxy}, showOptionsSaved);
      /*
  }
  else {
      document.getElementById('status').textContent = 'Invalid URL';
  }
  */
}

function setOptions(items) {
  document.getElementById('proxy').value = items.proxy;
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);

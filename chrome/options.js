var status = document.getElementById('status');

function hideOptionsSaved() {
  status.textContent = '';
}

function restoreOptions() {
  chrome.storage.sync.get({proxy: proxy}, setOptions);
}

function showOptionsSaved() {
  status.textContent = 'Options saved.';
  window.setTimeout(hideOptionsSaved, 750);
}

function saveOptions() {
  var proxy = document.getElementById('proxy').value;

  chrome.storage.sync.set({proxy: proxy}, showOptionsSaved);
}

function setOptions(items) {
  document.getElementById('proxy').value = items.proxy;
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);

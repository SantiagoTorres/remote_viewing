function reset(items) {
  var xhr = new XMLHttpRequest();
  var url = items.proxy + "/reset";
  var message;

  xhr.open("GET", url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        message = "Remote virtual machine has acknowledged reset.";
      } else {
        message = "Remote virtual machine could not reset!";
      }
      window.alert(message);
    }
  }
  xhr.send();
}

function resetOnClick(e) {
  chrome.storage.sync.get({proxy: proxy}, reset);
}

document.addEventListener('DOMContentLoaded', function() {
  var resetButton = document.getElementById('reset');
  resetButton.addEventListener('click', resetOnClick)
});

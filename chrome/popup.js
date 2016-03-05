function reset() {
  var xhr = new XMLHttpRequest();
  var url = "http://example.amazonaws.com/reset";
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
  reset();
}

document.addEventListener('DOMContentLoaded', function() {
  var resetButton = document.getElementById('reset');
  resetButton.addEventListener('click', resetOnClick)
});

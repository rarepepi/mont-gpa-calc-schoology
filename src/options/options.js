// Saves options to chrome.storage
function save_options() {
    var dark = document.getElementById('dark-mode').checked;
    chrome.storage.local.set({
      darkMode: dark
    }, function() {
      // Update status to let user know options were saved.
      var status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(function() {
        status.textContent = '';
      }, 750);
    });
  }

  function restore_options() {
    chrome.storage.local.get({
      darkMode: false
    }, function(items) {
      document.getElementById('dark-mode').checked = items.darkMode;
    });
  }

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);

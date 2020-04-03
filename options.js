function _update_status(message) {
  var status = document.getElementById('status');
  status.textContent = message;
  setTimeout(function() {
    status.textContent = '';
  }, 2000);
}

function _list_options() {
  chrome.storage.sync.get(null, function(records) {
    var allUrls = Object.keys(records);
    console.log(records);
  });
}

function clear_options() {
  chrome.storage.sync.clear();
}

function save_to_storage(urlPattern, copyPattern) {
}

function save_options() {
  var url_regex = document.getElementById('url_regex').value;
  var pattern_regex = document.getElementById('pattern_regex').value;

  chrome.storage.sync.set({[url_regex]: pattern_regex}, function() {
    _update_status('Saved pattern ' + url_regex + ' ' + pattern_regex);
    _append_to_list(url_regex, pattern_regex);
  });
}

function _append_to_list(url_regex, pattern_regex) {
  var li = document.createElement('li');
  li.innerHTML = url_regex + ': ' + pattern_regex;
  document.getElementById('saved-options').appendChild(li);
}

function restore_options() {
  chrome.storage.sync.get(null, function(options) {
    for(let [url, pattern] of Object.entries(options)) {
      _append_to_list(url, pattern);
    }
  });
}

function retrieve_option(url) {
  chrome.storage.sync.get(url, function(result) {
    console.log('retrieved: ', result[url]);
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
document.getElementById('clear').addEventListener('click', clear_options);

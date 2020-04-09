function matchURL() {
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    chrome.storage.sync.get(null, function(options){
      var used_url_pattern = '';
      var used_pattern = '';

      var content = '';
      for(let [url_regex, pattern_regex] of Object.entries(options)) {
        if (!url.match(url_regex)) {
          continue;
        }
        content = url.match(pattern_regex);
        used_url_regex = url_regex;
        used_pattern_regex = pattern_regex;
        break;
      }

      if (!content) {
        alert('no match pattern added');
      } else {
        var el = document.createElement('textarea');
        el.value = content;
        el.setAttribute('readonly', '');
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy')
        document.body.removeChild(el);
        alert('copied');
      }
    });
  });
}

chrome.browserAction.onClicked.addListener(function(tab) {
  matchURL();
});

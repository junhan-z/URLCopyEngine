function matchURL() {
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    chrome.storage.sync.get(null, function(options){
      var used_url_pattern = '';
      var used_pattern = '';

      var subURL = '';
      for(let [url_regex, pattern_regex] of Object.entries(options)) {
        if (!url.match(url_regex)) {
          continue;
        }
        subURL = url.match(pattern_regex);
        used_url_regex = url_regex;
        used_pattern_regex = pattern_regex;
        break;
      }

      if (subURL) {
        var el = document.createElement('textarea');
        el.value = subURL;
        el.setAttribute('readonly', '');
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy')
        document.body.removeChild(el);
      }
      notify(subURL);
    });
  });
}

function notify(subURL) {
  var opt = {
    type: "basic",
    iconUrl: "copy-icon-192x192.png"
  }
  if (subURL) {
    opt.title = "✅ Sub-URL matched";
    opt.message = 'Copied: ' + subURL;
  } else {
    opt.title = "⚠️ No Sub-URL matched";
    opt.message = 'Nothing was copied.';
  }
  chrome.notifications.create(opt);
}

chrome.browserAction.onClicked.addListener(function(tab) {
  matchURL();
});

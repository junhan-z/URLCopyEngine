# URLCopyEngine
<img src="copy-icon-192x192.png">


## Overview
A chrome extension to copy a specific pattern of URL of current tab.

## Installation
For more details reference to [google's page](https://developer.chrome.com/extensions/getstarted).

0. Download this repo and unzip to a directory.
1. Open the Extension Management page by navigating to `chrome://extensions`.
    * The Extension Management page can also be opened by clicking on the Chrome menu, hovering over More Tools then selecting Extensions.
2. Enable Developer Mode by clicking the toggle switch next to Developer mode.
3. Click the LOAD UNPACKED button and select the extension directory.
<img src="https://developer.chrome.com/static/images/get_started/load_extension.png">

## Instruction
For an example, if we'd like to match the content of `questions/<number>` when visit `stackoverflow.com`.

Go to options page:
1. add which URL pattern to match, as specific as possible, otherwise the pattern of the first matched URL pattern will be selected. In this case: `stackoverflow.com`
2. add the pattern of the URL to match, in this case: `questions\/[0-9]+`
3. click 'Save'

<img src="assets/img/options_page_example.png">

4. Go to `stackoverflow.com` pages, click the extension button, the content you are interested is copied to your clipboard with a notification. Voila, now you can paste it anywhere.
<img src="assets/img/result.png">


### Disclaimer
Not intended to publish for now, use at your own risk.

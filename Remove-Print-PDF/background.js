chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(tab.id, {
    file : 'content.js',
    allFrames : true
  }, function() {
    var code = 'callDesignHTML();';
    chrome.tabs.executeScript(tab.id, {
      code : code,
      allFrames : true
    }, function(e) {
      const lastErr = chrome.runtime.lastError;
      if (lastErr) alert('You can\'t edit this page because: ' + lastErr.message);
      else alert('Now you can select contents or images and press del key to remove it!');
    });
  });
});

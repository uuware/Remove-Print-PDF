chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(tab.id, {
    file : 'content.js',
    allFrames : true
  }, function() {
    var code = 'callDesignHTML();';
    chrome.tabs.executeScript(tab.id, {
    code : code,
    allFrames : true
    }, function() {
      alert('Now you can select some text or images and press del key!');
    });
  });
});

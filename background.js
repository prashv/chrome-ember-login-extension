
chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    id: 'main',
    innerBounds: {
      height: 450,
      width: 300,
    },
    resizable: true
  });
});

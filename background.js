// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "renameTab") {
    // Get the current active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var tab = tabs[0];
      var newTitle = request.newTitle;

      // Rename the tab
      chrome.tabs.executeScript(tab.id, { code: "document.title = '" + newTitle + "';" });

      // Send a response to the popup
      sendResponse({ message: "Tab renamed successfully!" });
    });
  }
});

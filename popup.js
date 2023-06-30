// Get the necessary DOM elements
var newTitleInput = document.getElementById("newTitleInput");
var renameButton = document.getElementById("renameButton");
var message = document.getElementById("message");

// Handle the rename button click event
renameButton.addEventListener("click", function () {
  var newTitle = newTitleInput.value;

  // Send a message to the background script to rename the tab
  chrome.runtime.sendMessage({ action: "renameTab", newTitle: newTitle }, function (response) {
    // Display the response message
    message.textContent = response.message;
  });
});

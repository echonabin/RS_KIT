import openDevToolsWindow from "./openWindow";
import { createMenu } from "./contextMenu";

// Listen for keyboard shortcuts
chrome.commands.onCommand.addListener((shortcut) => {
  openDevToolsWindow(shortcut);
});

chrome.action.onClicked.addListener(function (tab) {
  // Send a message to the active tab
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {
      message: "open-rs-kit",
    });
  });
});
createMenu();

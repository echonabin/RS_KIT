import openDevToolsWindow from "./openWindow";
import { createMenu } from "./contextMenu";

// Listen for keyboard shortcuts
chrome.commands.onCommand.addListener((shortcut) => {
  openDevToolsWindow(shortcut);
});

createMenu();

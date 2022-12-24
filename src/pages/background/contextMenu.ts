import openDevToolsWindow from "./openWindow";

export function createMenu() {
  const menus = [
    { id: "open-rs-kit", title: "Open Rskit here" },
    { id: "devtools-remote", title: "Rs devkit" },
  ];

  let shortcuts = {};
  chrome.commands.getAll((commands) => {
    commands.forEach(({ name, shortcut }) => {
      shortcuts[name] = shortcut;
    });

    menus.forEach(({ id, title }) => {
      chrome.contextMenus.create({
        id: id,
        title: title + (shortcuts[id] ? " (" + shortcuts[id] + ")" : ""),
        contexts: ["all"],
      });
    });
  });
}

export function removeMenu() {
  chrome.contextMenus.removeAll();
}

chrome.contextMenus.onClicked.addListener(({ menuItemId }) => {
  if (menuItemId === "devtools-remote") {
    chrome.windows.create({
      type: "popup",
      width: 850,
      height: 600,
      focused: true,
      url: "/src/pages/remote/index.html",
    });
  } else if (menuItemId === "open-rs-kit") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { message: "open-rs-kit" });
    });
  }
});

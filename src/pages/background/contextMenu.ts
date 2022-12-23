import openDevToolsWindow from "./openWindow";

export function createMenu() {
  const menus = [{ id: "devtools-remote", title: "Open Remote DevTools" }];

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
  async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }
  getCurrentTab().then((res) => {
    chrome.windows.create({
      type: "popup",
      width: 850,
      height: 600,
      focused: true,
      url: res.url,
    });
  });
});

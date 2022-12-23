let windows = {};
let lastPosition = null;

export default function openDevToolsWindow(position) {
  function popWindow(action, url, customOptions) {
    function focusIfExist(callback) {
      if (!windows[position]) {
        callback();
        lastPosition = position;
      } else {
        let params = { focused: true };
        if (lastPosition !== position && position !== "devtools-panel")
          params = { ...params, ...customOptions };
        chrome.windows.update(windows[position], params, () => {
          lastPosition = null;
          if (chrome.runtime.lastError) callback();
        });
      }
    }

    focusIfExist(() => {
      let options = {
        type: "popup",
        ...customOptions,
      };
      if (action === "open") {
        options.url = chrome.extension.getURL(
          url + "#" + position.substr(position.indexOf("-") + 1)
        );
        chrome.windows.create(options, (win) => {
          windows[position] = win.id;
          if (navigator.userAgent.indexOf("Firefox") !== -1) {
            chrome.windows.update(win.id, { focused: true, ...customOptions });
          }
        });
      }
    });
  }

  let params = {
    width: 850,
    height: 600,
  };
  let url = "http://google.com";
  popWindow("open", url, params);
}

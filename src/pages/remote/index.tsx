import React from "react";
import { createRoot } from "react-dom/client";
import "@pages/popup/index.css";
import App from "@src/pages/remote/App";
import refreshOnUpdate from "virtual:reload-on-update-in-background-script";

refreshOnUpdate("pages/remote");

function init() {
  const appContainer = document.querySelector("#app-container");
  if (!appContainer) {
    throw new Error("Can not find AppContainer");
  }
  const root = createRoot(appContainer);
  root.render(<App />);
}

init();

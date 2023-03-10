import { createRoot } from "react-dom/client";
import App from "@src/pages/content/components/Demo/app";
import refreshOnUpdate from "virtual:reload-on-update-in-view";

refreshOnUpdate("pages/content/components/Demo");

chrome.runtime.onMessage.addListener((request, sender) => {
  const element = document.getElementById(
    "chrome-extension-boilerplate-react-vite-content-view-root"
  );
  if (request.message === "open-rs-kit") {
    const root = document.createElement("div");
    root.id = "chrome-extension-boilerplate-react-vite-content-view-root";
    root.className = `w-full h-full`;
    document.open();
    document.append(root);
    createRoot(root).render(<App />);
  }
  if (element !== null) {
    location.reload();
  }
});

import packageJson from "./package.json";

const manifest: chrome.runtime.ManifestV3 = {
  manifest_version: 3,
  name: "Rs Kit",
  version: packageJson.version,
  description: packageJson.description,
  options_page: "src/pages/options/index.html",
  background: { service_worker: "src/pages/background/index.js" },
  action: {
    default_popup: "src/pages/popup/index.html",
    default_icon: "device_32.png",
  },
  icons: {
    "128": "device_128.png",
  },
  commands: {
    "rskit-remote": {
      description: "Remote DevTools",
    },
  },
  // content_scripts: [
  //   {
  //     matches: ["http://*/*", "https://*/*", "<all_urls>"],
  //     js: ["src/pages/content/index.js"],
  //     css: ["assets/css/contentStyle.chunk.css"],
  //   },
  // ],
  devtools_page: "src/pages/devtools/index.html",
  permissions: ["tabs", "contextMenus"],
  web_accessible_resources: [
    {
      resources: [
        "assets/js/*.js",
        "assets/css/*.css",
        "device_128.png",
        "device_32.png",
      ],
      matches: ["*://*/*"],
    },
  ],
};

export default manifest;

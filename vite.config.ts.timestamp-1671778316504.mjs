// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path3, { resolve as resolve3 } from "path";

// utils/plugins/make-manifest.ts
import * as fs from "fs";
import * as path from "path";

// utils/log.ts
function colorLog(message, type) {
  let color = type || COLORS.FgBlack;
  switch (type) {
    case "success":
      color = COLORS.FgGreen;
      break;
    case "info":
      color = COLORS.FgBlue;
      break;
    case "error":
      color = COLORS.FgRed;
      break;
    case "warning":
      color = COLORS.FgYellow;
      break;
  }
  console.log(color, message);
}
var COLORS = {
  Reset: "\x1B[0m",
  Bright: "\x1B[1m",
  Dim: "\x1B[2m",
  Underscore: "\x1B[4m",
  Blink: "\x1B[5m",
  Reverse: "\x1B[7m",
  Hidden: "\x1B[8m",
  FgBlack: "\x1B[30m",
  FgRed: "\x1B[31m",
  FgGreen: "\x1B[32m",
  FgYellow: "\x1B[33m",
  FgBlue: "\x1B[34m",
  FgMagenta: "\x1B[35m",
  FgCyan: "\x1B[36m",
  FgWhite: "\x1B[37m",
  BgBlack: "\x1B[40m",
  BgRed: "\x1B[41m",
  BgGreen: "\x1B[42m",
  BgYellow: "\x1B[43m",
  BgBlue: "\x1B[44m",
  BgMagenta: "\x1B[45m",
  BgCyan: "\x1B[46m",
  BgWhite: "\x1B[47m"
};

// utils/manifest-parser/index.ts
var ManifestParser = class {
  constructor() {
  }
  static convertManifestToString(manifest2) {
    return JSON.stringify(manifest2, null, 2);
  }
};
var manifest_parser_default = ManifestParser;

// utils/plugins/make-manifest.ts
var __vite_injected_original_dirname = "C:\\Users\\Leapfrog\\dev\\personal\\RS_KIT\\utils\\plugins";
var { resolve } = path;
var outDir = resolve(__vite_injected_original_dirname, "..", "..", "public");
function makeManifest(manifest2) {
  return {
    name: "make-manifest",
    buildEnd() {
      if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir);
      }
      const manifestPath = resolve(outDir, "manifest.json");
      fs.writeFileSync(
        manifestPath,
        manifest_parser_default.convertManifestToString(manifest2)
      );
      colorLog(`Manifest file copy complete: ${manifestPath}`, "success");
    }
  };
}

// utils/plugins/custom-dynamic-import.ts
function customDynamicImport() {
  return {
    name: "custom-dynamic-import",
    renderDynamicImport() {
      return {
        left: `
        {
          const dynamicImport = (path) => import(path);
          dynamicImport(
          `,
        right: ")}"
      };
    }
  };
}

// utils/plugins/add-hmr.ts
import * as path2 from "path";
import { readFileSync } from "fs";
var __vite_injected_original_dirname2 = "C:\\Users\\Leapfrog\\dev\\personal\\RS_KIT\\utils\\plugins";
var isDev = process.env.__DEV__ === "true";
var DUMMY_CODE = `export default function(){};`;
function getInjectionCode(fileName) {
  return readFileSync(
    path2.resolve(__vite_injected_original_dirname2, "..", "reload", "injections", fileName),
    { encoding: "utf8" }
  );
}
function addHmr(config) {
  const { background = false, view = true } = config || {};
  const idInBackgroundScript = "virtual:reload-on-update-in-background-script";
  const idInView = "virtual:reload-on-update-in-view";
  const scriptHmrCode = isDev ? getInjectionCode("script.js") : DUMMY_CODE;
  const viewHmrCode = isDev ? getInjectionCode("view.js") : DUMMY_CODE;
  return {
    name: "add-hmr",
    resolveId(id) {
      if (id === idInBackgroundScript || id === idInView) {
        return getResolvedId(id);
      }
    },
    load(id) {
      if (id === getResolvedId(idInBackgroundScript)) {
        return background ? scriptHmrCode : DUMMY_CODE;
      }
      if (id === getResolvedId(idInView)) {
        return view ? viewHmrCode : DUMMY_CODE;
      }
    }
  };
}
function getResolvedId(id) {
  return "\0" + id;
}

// package.json
var package_default = {
  name: "RS_KIT",
  version: "0.0.1",
  description: "With this extension one can see their webpage on 425px, 768px, 1080px, 1440px etc in singlepage.",
  license: "MIT",
  scripts: {
    build: "tsc --noEmit && vite build",
    "build:hmr": "rollup --config utils/reload/rollup.config.ts",
    wss: "node utils/reload/initReloadServer.js",
    dev: "npm run build:hmr && (run-p wss dev:nodemon)",
    "dev:nodemon": "nodemon",
    test: "jest"
  },
  type: "module",
  dependencies: {
    react: "18.2.0",
    "react-dom": "18.2.0"
  },
  devDependencies: {
    "@rollup/plugin-typescript": "^8.5.0",
    "@testing-library/react": "13.4.0",
    "@types/chrome": "0.0.197",
    "@types/jest": "29.0.3",
    "@types/node": "18.7.23",
    "@types/react": "18.0.21",
    "@types/react-dom": "18.0.6",
    "@types/ws": "^8.5.3",
    "@typescript-eslint/eslint-plugin": "5.38.1",
    "@typescript-eslint/parser": "5.38.1",
    "@vitejs/plugin-react": "2.1.0",
    autoprefixer: "^10.4.13",
    chokidar: "^3.5.3",
    eslint: "8.24.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-prettier": "4.2.1",
    "eslint-plugin-react": "7.31.8",
    "fs-extra": "10.1.0",
    jest: "29.0.3",
    "jest-environment-jsdom": "29.0.3",
    nodemon: "2.0.20",
    "npm-run-all": "^4.1.5",
    postcss: "^8.4.20",
    prettier: "2.7.1",
    rollup: "2.79.1",
    sass: "1.55.0",
    tailwindcss: "^3.2.4",
    "ts-jest": "29.0.2",
    "ts-loader": "9.4.1",
    typescript: "4.8.3",
    vite: "3.1.3",
    ws: "8.9.0"
  }
};

// manifest.ts
var manifest = {
  manifest_version: 3,
  name: "Rs Kit",
  version: package_default.version,
  description: package_default.description,
  options_page: "src/pages/options/index.html",
  background: { service_worker: "src/pages/background/index.js" },
  action: {
    default_popup: "src/pages/popup/index.html",
    default_icon: "device_32.png"
  },
  icons: {
    "128": "device_128.png"
  },
  commands: {
    "rskit-remote": {
      description: "Remote DevTools"
    }
  },
  devtools_page: "src/pages/devtools/index.html",
  permissions: ["tabs", "contextMenus"],
  web_accessible_resources: [
    {
      resources: [
        "assets/js/*.js",
        "assets/css/*.css",
        "device_128.png",
        "device_32.png"
      ],
      matches: ["*://*/*"]
    }
  ]
};
var manifest_default = manifest;

// vite.config.ts
var __vite_injected_original_dirname3 = "C:\\Users\\Leapfrog\\dev\\personal\\RS_KIT";
var root = resolve3(__vite_injected_original_dirname3, "src");
var pagesDir = resolve3(root, "pages");
var assetsDir = resolve3(root, "assets");
var outDir2 = resolve3(__vite_injected_original_dirname3, "dist");
var publicDir = resolve3(__vite_injected_original_dirname3, "public");
var isDev2 = process.env.__DEV__ === "true";
var enableHmrInBackgroundScript = true;
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@src": root,
      "@assets": assetsDir,
      "@pages": pagesDir
    }
  },
  plugins: [
    react(),
    makeManifest(manifest_default),
    customDynamicImport(),
    addHmr({ background: enableHmrInBackgroundScript, view: true })
  ],
  publicDir,
  build: {
    outDir: outDir2,
    sourcemap: isDev2,
    rollupOptions: {
      input: {
        devtools: resolve3(pagesDir, "devtools", "index.html"),
        panel: resolve3(pagesDir, "panel", "index.html"),
        content: resolve3(pagesDir, "content", "index.ts"),
        background: resolve3(
          pagesDir,
          "background",
          "remote",
          "index.html"
        ),
        contentStyle: resolve3(pagesDir, "content", "style.scss"),
        popup: resolve3(pagesDir, "popup", "index.html"),
        newtab: resolve3(pagesDir, "newtab", "index.html"),
        options: resolve3(pagesDir, "options", "index.html")
      },
      output: {
        entryFileNames: "src/pages/[name]/index.js",
        chunkFileNames: isDev2 ? "assets/js/[name].js" : "assets/js/[name].[hash].js",
        assetFileNames: (assetInfo) => {
          const { dir, name: _name } = path3.parse(assetInfo.name);
          const assetFolder = getLastElement(dir.split("/"));
          const name = assetFolder + firstUpperCase(_name);
          return `assets/[ext]/${name}.chunk.[ext]`;
        }
      }
    }
  }
});
function getLastElement(array) {
  const length = array.length;
  const lastIndex = length - 1;
  return array[lastIndex];
}
function firstUpperCase(str) {
  const firstAlphabet = new RegExp(/( |^)[a-z]/, "g");
  return str.toLowerCase().replace(firstAlphabet, (L) => L.toUpperCase());
}
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAidXRpbHMvcGx1Z2lucy9tYWtlLW1hbmlmZXN0LnRzIiwgInV0aWxzL2xvZy50cyIsICJ1dGlscy9tYW5pZmVzdC1wYXJzZXIvaW5kZXgudHMiLCAidXRpbHMvcGx1Z2lucy9jdXN0b20tZHluYW1pYy1pbXBvcnQudHMiLCAidXRpbHMvcGx1Z2lucy9hZGQtaG1yLnRzIiwgIm1hbmlmZXN0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcTGVhcGZyb2dcXFxcZGV2XFxcXHBlcnNvbmFsXFxcXFJTX0tJVFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcTGVhcGZyb2dcXFxcZGV2XFxcXHBlcnNvbmFsXFxcXFJTX0tJVFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvTGVhcGZyb2cvZGV2L3BlcnNvbmFsL1JTX0tJVC92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XHJcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcclxuaW1wb3J0IHBhdGgsIHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCBtYWtlTWFuaWZlc3QgZnJvbSBcIi4vdXRpbHMvcGx1Z2lucy9tYWtlLW1hbmlmZXN0XCI7XHJcbmltcG9ydCBjdXN0b21EeW5hbWljSW1wb3J0IGZyb20gXCIuL3V0aWxzL3BsdWdpbnMvY3VzdG9tLWR5bmFtaWMtaW1wb3J0XCI7XHJcbmltcG9ydCBhZGRIbXIgZnJvbSBcIi4vdXRpbHMvcGx1Z2lucy9hZGQtaG1yXCI7XHJcbmltcG9ydCBtYW5pZmVzdCBmcm9tIFwiLi9tYW5pZmVzdFwiO1xyXG5cclxuY29uc3Qgcm9vdCA9IHJlc29sdmUoX19kaXJuYW1lLCBcInNyY1wiKTtcclxuY29uc3QgcGFnZXNEaXIgPSByZXNvbHZlKHJvb3QsIFwicGFnZXNcIik7XHJcbmNvbnN0IGFzc2V0c0RpciA9IHJlc29sdmUocm9vdCwgXCJhc3NldHNcIik7XHJcbmNvbnN0IG91dERpciA9IHJlc29sdmUoX19kaXJuYW1lLCBcImRpc3RcIik7XHJcbmNvbnN0IHB1YmxpY0RpciA9IHJlc29sdmUoX19kaXJuYW1lLCBcInB1YmxpY1wiKTtcclxuXHJcbmNvbnN0IGlzRGV2ID0gcHJvY2Vzcy5lbnYuX19ERVZfXyA9PT0gXCJ0cnVlXCI7XHJcblxyXG4vLyBFTkFCTEUgSE1SIElOIEJBQ0tHUk9VTkQgU0NSSVBUXHJcbmNvbnN0IGVuYWJsZUhtckluQmFja2dyb3VuZFNjcmlwdCA9IHRydWU7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIFwiQHNyY1wiOiByb290LFxyXG4gICAgICBcIkBhc3NldHNcIjogYXNzZXRzRGlyLFxyXG4gICAgICBcIkBwYWdlc1wiOiBwYWdlc0RpcixcclxuICAgIH0sXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICByZWFjdCgpLFxyXG4gICAgbWFrZU1hbmlmZXN0KG1hbmlmZXN0KSxcclxuICAgIGN1c3RvbUR5bmFtaWNJbXBvcnQoKSxcclxuICAgIGFkZEhtcih7IGJhY2tncm91bmQ6IGVuYWJsZUhtckluQmFja2dyb3VuZFNjcmlwdCwgdmlldzogdHJ1ZSB9KSxcclxuICBdLFxyXG4gIHB1YmxpY0RpcixcclxuICBidWlsZDoge1xyXG4gICAgb3V0RGlyLFxyXG4gICAgc291cmNlbWFwOiBpc0RldixcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgaW5wdXQ6IHtcclxuICAgICAgICBkZXZ0b29sczogcmVzb2x2ZShwYWdlc0RpciwgXCJkZXZ0b29sc1wiLCBcImluZGV4Lmh0bWxcIiksXHJcbiAgICAgICAgcGFuZWw6IHJlc29sdmUocGFnZXNEaXIsIFwicGFuZWxcIiwgXCJpbmRleC5odG1sXCIpLFxyXG4gICAgICAgIGNvbnRlbnQ6IHJlc29sdmUocGFnZXNEaXIsIFwiY29udGVudFwiLCBcImluZGV4LnRzXCIpLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IHJlc29sdmUoXHJcbiAgICAgICAgICBwYWdlc0RpcixcclxuICAgICAgICAgIFwiYmFja2dyb3VuZFwiLFxyXG4gICAgICAgICAgXCJyZW1vdGVcIixcclxuICAgICAgICAgIFwiaW5kZXguaHRtbFwiXHJcbiAgICAgICAgICAvLyBcImluZGV4LnRzXCJcclxuICAgICAgICApLFxyXG4gICAgICAgIGNvbnRlbnRTdHlsZTogcmVzb2x2ZShwYWdlc0RpciwgXCJjb250ZW50XCIsIFwic3R5bGUuc2Nzc1wiKSxcclxuICAgICAgICBwb3B1cDogcmVzb2x2ZShwYWdlc0RpciwgXCJwb3B1cFwiLCBcImluZGV4Lmh0bWxcIiksXHJcbiAgICAgICAgbmV3dGFiOiByZXNvbHZlKHBhZ2VzRGlyLCBcIm5ld3RhYlwiLCBcImluZGV4Lmh0bWxcIiksXHJcbiAgICAgICAgb3B0aW9uczogcmVzb2x2ZShwYWdlc0RpciwgXCJvcHRpb25zXCIsIFwiaW5kZXguaHRtbFwiKSxcclxuICAgICAgfSxcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6IFwic3JjL3BhZ2VzL1tuYW1lXS9pbmRleC5qc1wiLFxyXG4gICAgICAgIGNodW5rRmlsZU5hbWVzOiBpc0RldlxyXG4gICAgICAgICAgPyBcImFzc2V0cy9qcy9bbmFtZV0uanNcIlxyXG4gICAgICAgICAgOiBcImFzc2V0cy9qcy9bbmFtZV0uW2hhc2hdLmpzXCIsXHJcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IChhc3NldEluZm8pID0+IHtcclxuICAgICAgICAgIGNvbnN0IHsgZGlyLCBuYW1lOiBfbmFtZSB9ID0gcGF0aC5wYXJzZShhc3NldEluZm8ubmFtZSk7XHJcbiAgICAgICAgICBjb25zdCBhc3NldEZvbGRlciA9IGdldExhc3RFbGVtZW50KGRpci5zcGxpdChcIi9cIikpO1xyXG4gICAgICAgICAgY29uc3QgbmFtZSA9IGFzc2V0Rm9sZGVyICsgZmlyc3RVcHBlckNhc2UoX25hbWUpO1xyXG4gICAgICAgICAgcmV0dXJuIGBhc3NldHMvW2V4dF0vJHtuYW1lfS5jaHVuay5bZXh0XWA7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBnZXRMYXN0RWxlbWVudDxUPihhcnJheTogQXJyYXlMaWtlPFQ+KTogVCB7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xyXG4gIGNvbnN0IGxhc3RJbmRleCA9IGxlbmd0aCAtIDE7XHJcbiAgcmV0dXJuIGFycmF5W2xhc3RJbmRleF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpcnN0VXBwZXJDYXNlKHN0cjogc3RyaW5nKSB7XHJcbiAgY29uc3QgZmlyc3RBbHBoYWJldCA9IG5ldyBSZWdFeHAoLyggfF4pW2Etel0vLCBcImdcIik7XHJcbiAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoZmlyc3RBbHBoYWJldCwgKEwpID0+IEwudG9VcHBlckNhc2UoKSk7XHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxMZWFwZnJvZ1xcXFxkZXZcXFxccGVyc29uYWxcXFxcUlNfS0lUXFxcXHV0aWxzXFxcXHBsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXExlYXBmcm9nXFxcXGRldlxcXFxwZXJzb25hbFxcXFxSU19LSVRcXFxcdXRpbHNcXFxccGx1Z2luc1xcXFxtYWtlLW1hbmlmZXN0LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9MZWFwZnJvZy9kZXYvcGVyc29uYWwvUlNfS0lUL3V0aWxzL3BsdWdpbnMvbWFrZS1tYW5pZmVzdC50c1wiO2ltcG9ydCAqIGFzIGZzIGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XHJcbmltcG9ydCBjb2xvckxvZyBmcm9tIFwiLi4vbG9nXCI7XHJcbmltcG9ydCB7IFBsdWdpbk9wdGlvbiB9IGZyb20gXCJ2aXRlXCI7XHJcbmltcG9ydCBNYW5pZmVzdFBhcnNlciBmcm9tIFwiLi4vbWFuaWZlc3QtcGFyc2VyXCI7XHJcblxyXG5jb25zdCB7IHJlc29sdmUgfSA9IHBhdGg7XHJcblxyXG5jb25zdCBvdXREaXIgPSByZXNvbHZlKF9fZGlybmFtZSwgXCIuLlwiLCBcIi4uXCIsIFwicHVibGljXCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFrZU1hbmlmZXN0KFxyXG4gIG1hbmlmZXN0OiBjaHJvbWUucnVudGltZS5NYW5pZmVzdFYzXHJcbik6IFBsdWdpbk9wdGlvbiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWU6IFwibWFrZS1tYW5pZmVzdFwiLFxyXG4gICAgYnVpbGRFbmQoKSB7XHJcbiAgICAgIGlmICghZnMuZXhpc3RzU3luYyhvdXREaXIpKSB7XHJcbiAgICAgICAgZnMubWtkaXJTeW5jKG91dERpcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IG1hbmlmZXN0UGF0aCA9IHJlc29sdmUob3V0RGlyLCBcIm1hbmlmZXN0Lmpzb25cIik7XHJcblxyXG4gICAgICBmcy53cml0ZUZpbGVTeW5jKFxyXG4gICAgICAgIG1hbmlmZXN0UGF0aCxcclxuICAgICAgICBNYW5pZmVzdFBhcnNlci5jb252ZXJ0TWFuaWZlc3RUb1N0cmluZyhtYW5pZmVzdClcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGNvbG9yTG9nKGBNYW5pZmVzdCBmaWxlIGNvcHkgY29tcGxldGU6ICR7bWFuaWZlc3RQYXRofWAsIFwic3VjY2Vzc1wiKTtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXExlYXBmcm9nXFxcXGRldlxcXFxwZXJzb25hbFxcXFxSU19LSVRcXFxcdXRpbHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXExlYXBmcm9nXFxcXGRldlxcXFxwZXJzb25hbFxcXFxSU19LSVRcXFxcdXRpbHNcXFxcbG9nLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9MZWFwZnJvZy9kZXYvcGVyc29uYWwvUlNfS0lUL3V0aWxzL2xvZy50c1wiO3R5cGUgQ29sb3JUeXBlID0gXCJzdWNjZXNzXCIgfCBcImluZm9cIiB8IFwiZXJyb3JcIiB8IFwid2FybmluZ1wiIHwga2V5b2YgdHlwZW9mIENPTE9SUztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbG9yTG9nKG1lc3NhZ2U6IHN0cmluZywgdHlwZT86IENvbG9yVHlwZSkge1xyXG4gIGxldCBjb2xvcjogc3RyaW5nID0gdHlwZSB8fCBDT0xPUlMuRmdCbGFjaztcclxuXHJcbiAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICBjYXNlIFwic3VjY2Vzc1wiOlxyXG4gICAgICBjb2xvciA9IENPTE9SUy5GZ0dyZWVuO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJpbmZvXCI6XHJcbiAgICAgIGNvbG9yID0gQ09MT1JTLkZnQmx1ZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwiZXJyb3JcIjpcclxuICAgICAgY29sb3IgPSBDT0xPUlMuRmdSZWQ7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIndhcm5pbmdcIjpcclxuICAgICAgY29sb3IgPSBDT0xPUlMuRmdZZWxsb3c7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2coY29sb3IsIG1lc3NhZ2UpO1xyXG59XHJcblxyXG5jb25zdCBDT0xPUlMgPSB7XHJcbiAgUmVzZXQ6IFwiXFx4MWJbMG1cIixcclxuICBCcmlnaHQ6IFwiXFx4MWJbMW1cIixcclxuICBEaW06IFwiXFx4MWJbMm1cIixcclxuICBVbmRlcnNjb3JlOiBcIlxceDFiWzRtXCIsXHJcbiAgQmxpbms6IFwiXFx4MWJbNW1cIixcclxuICBSZXZlcnNlOiBcIlxceDFiWzdtXCIsXHJcbiAgSGlkZGVuOiBcIlxceDFiWzhtXCIsXHJcbiAgRmdCbGFjazogXCJcXHgxYlszMG1cIixcclxuICBGZ1JlZDogXCJcXHgxYlszMW1cIixcclxuICBGZ0dyZWVuOiBcIlxceDFiWzMybVwiLFxyXG4gIEZnWWVsbG93OiBcIlxceDFiWzMzbVwiLFxyXG4gIEZnQmx1ZTogXCJcXHgxYlszNG1cIixcclxuICBGZ01hZ2VudGE6IFwiXFx4MWJbMzVtXCIsXHJcbiAgRmdDeWFuOiBcIlxceDFiWzM2bVwiLFxyXG4gIEZnV2hpdGU6IFwiXFx4MWJbMzdtXCIsXHJcbiAgQmdCbGFjazogXCJcXHgxYls0MG1cIixcclxuICBCZ1JlZDogXCJcXHgxYls0MW1cIixcclxuICBCZ0dyZWVuOiBcIlxceDFiWzQybVwiLFxyXG4gIEJnWWVsbG93OiBcIlxceDFiWzQzbVwiLFxyXG4gIEJnQmx1ZTogXCJcXHgxYls0NG1cIixcclxuICBCZ01hZ2VudGE6IFwiXFx4MWJbNDVtXCIsXHJcbiAgQmdDeWFuOiBcIlxceDFiWzQ2bVwiLFxyXG4gIEJnV2hpdGU6IFwiXFx4MWJbNDdtXCIsXHJcbn0gYXMgY29uc3Q7XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcTGVhcGZyb2dcXFxcZGV2XFxcXHBlcnNvbmFsXFxcXFJTX0tJVFxcXFx1dGlsc1xcXFxtYW5pZmVzdC1wYXJzZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXExlYXBmcm9nXFxcXGRldlxcXFxwZXJzb25hbFxcXFxSU19LSVRcXFxcdXRpbHNcXFxcbWFuaWZlc3QtcGFyc2VyXFxcXGluZGV4LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9MZWFwZnJvZy9kZXYvcGVyc29uYWwvUlNfS0lUL3V0aWxzL21hbmlmZXN0LXBhcnNlci9pbmRleC50c1wiO3R5cGUgTWFuaWZlc3QgPSBjaHJvbWUucnVudGltZS5NYW5pZmVzdFYzO1xyXG5cclxuY2xhc3MgTWFuaWZlc3RQYXJzZXIge1xyXG4gIC8qKiBTSU5HTEVUT04gKi9cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uXHJcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIHN0YXRpYyBjb252ZXJ0TWFuaWZlc3RUb1N0cmluZyhtYW5pZmVzdDogTWFuaWZlc3QpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KG1hbmlmZXN0LCBudWxsLCAyKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hbmlmZXN0UGFyc2VyO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXExlYXBmcm9nXFxcXGRldlxcXFxwZXJzb25hbFxcXFxSU19LSVRcXFxcdXRpbHNcXFxccGx1Z2luc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcTGVhcGZyb2dcXFxcZGV2XFxcXHBlcnNvbmFsXFxcXFJTX0tJVFxcXFx1dGlsc1xcXFxwbHVnaW5zXFxcXGN1c3RvbS1keW5hbWljLWltcG9ydC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvTGVhcGZyb2cvZGV2L3BlcnNvbmFsL1JTX0tJVC91dGlscy9wbHVnaW5zL2N1c3RvbS1keW5hbWljLWltcG9ydC50c1wiO2ltcG9ydCB7IFBsdWdpbk9wdGlvbiB9IGZyb20gXCJ2aXRlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjdXN0b21EeW5hbWljSW1wb3J0KCk6IFBsdWdpbk9wdGlvbiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWU6IFwiY3VzdG9tLWR5bmFtaWMtaW1wb3J0XCIsXHJcbiAgICByZW5kZXJEeW5hbWljSW1wb3J0KCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGxlZnQ6IGBcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb25zdCBkeW5hbWljSW1wb3J0ID0gKHBhdGgpID0+IGltcG9ydChwYXRoKTtcclxuICAgICAgICAgIGR5bmFtaWNJbXBvcnQoXHJcbiAgICAgICAgICBgLFxyXG4gICAgICAgIHJpZ2h0OiBcIil9XCIsXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxMZWFwZnJvZ1xcXFxkZXZcXFxccGVyc29uYWxcXFxcUlNfS0lUXFxcXHV0aWxzXFxcXHBsdWdpbnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXExlYXBmcm9nXFxcXGRldlxcXFxwZXJzb25hbFxcXFxSU19LSVRcXFxcdXRpbHNcXFxccGx1Z2luc1xcXFxhZGQtaG1yLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9MZWFwZnJvZy9kZXYvcGVyc29uYWwvUlNfS0lUL3V0aWxzL3BsdWdpbnMvYWRkLWhtci50c1wiO2ltcG9ydCAqIGFzIHBhdGggZnJvbSBcInBhdGhcIjtcclxuaW1wb3J0IHsgUGx1Z2luT3B0aW9uIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHsgcmVhZEZpbGVTeW5jIH0gZnJvbSBcImZzXCI7XHJcblxyXG5jb25zdCBpc0RldiA9IHByb2Nlc3MuZW52Ll9fREVWX18gPT09IFwidHJ1ZVwiO1xyXG5cclxuY29uc3QgRFVNTVlfQ09ERSA9IGBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe307YDtcclxuXHJcbmZ1bmN0aW9uIGdldEluamVjdGlvbkNvZGUoZmlsZU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIHJlYWRGaWxlU3luYyhcclxuICAgIHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi5cIiwgXCJyZWxvYWRcIiwgXCJpbmplY3Rpb25zXCIsIGZpbGVOYW1lKSxcclxuICAgIHsgZW5jb2Rpbmc6IFwidXRmOFwiIH1cclxuICApO1xyXG59XHJcblxyXG50eXBlIENvbmZpZyA9IHtcclxuICBiYWNrZ3JvdW5kPzogYm9vbGVhbjtcclxuICB2aWV3PzogYm9vbGVhbjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZEhtcihjb25maWc/OiBDb25maWcpOiBQbHVnaW5PcHRpb24ge1xyXG4gIGNvbnN0IHsgYmFja2dyb3VuZCA9IGZhbHNlLCB2aWV3ID0gdHJ1ZSB9ID0gY29uZmlnIHx8IHt9O1xyXG4gIGNvbnN0IGlkSW5CYWNrZ3JvdW5kU2NyaXB0ID0gXCJ2aXJ0dWFsOnJlbG9hZC1vbi11cGRhdGUtaW4tYmFja2dyb3VuZC1zY3JpcHRcIjtcclxuICBjb25zdCBpZEluVmlldyA9IFwidmlydHVhbDpyZWxvYWQtb24tdXBkYXRlLWluLXZpZXdcIjtcclxuXHJcbiAgY29uc3Qgc2NyaXB0SG1yQ29kZSA9IGlzRGV2ID8gZ2V0SW5qZWN0aW9uQ29kZShcInNjcmlwdC5qc1wiKSA6IERVTU1ZX0NPREU7XHJcbiAgY29uc3Qgdmlld0htckNvZGUgPSBpc0RldiA/IGdldEluamVjdGlvbkNvZGUoXCJ2aWV3LmpzXCIpIDogRFVNTVlfQ09ERTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWU6IFwiYWRkLWhtclwiLFxyXG4gICAgcmVzb2x2ZUlkKGlkKSB7XHJcbiAgICAgIGlmIChpZCA9PT0gaWRJbkJhY2tncm91bmRTY3JpcHQgfHwgaWQgPT09IGlkSW5WaWV3KSB7XHJcbiAgICAgICAgcmV0dXJuIGdldFJlc29sdmVkSWQoaWQpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbG9hZChpZCkge1xyXG4gICAgICBpZiAoaWQgPT09IGdldFJlc29sdmVkSWQoaWRJbkJhY2tncm91bmRTY3JpcHQpKSB7XHJcbiAgICAgICAgcmV0dXJuIGJhY2tncm91bmQgPyBzY3JpcHRIbXJDb2RlIDogRFVNTVlfQ09ERTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGlkID09PSBnZXRSZXNvbHZlZElkKGlkSW5WaWV3KSkge1xyXG4gICAgICAgIHJldHVybiB2aWV3ID8gdmlld0htckNvZGUgOiBEVU1NWV9DT0RFO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJlc29sdmVkSWQoaWQ6IHN0cmluZykge1xyXG4gIHJldHVybiBcIlxcMFwiICsgaWQ7XHJcbn1cclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxMZWFwZnJvZ1xcXFxkZXZcXFxccGVyc29uYWxcXFxcUlNfS0lUXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxMZWFwZnJvZ1xcXFxkZXZcXFxccGVyc29uYWxcXFxcUlNfS0lUXFxcXG1hbmlmZXN0LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9MZWFwZnJvZy9kZXYvcGVyc29uYWwvUlNfS0lUL21hbmlmZXN0LnRzXCI7aW1wb3J0IHBhY2thZ2VKc29uIGZyb20gXCIuL3BhY2thZ2UuanNvblwiO1xyXG5cclxuY29uc3QgbWFuaWZlc3Q6IGNocm9tZS5ydW50aW1lLk1hbmlmZXN0VjMgPSB7XHJcbiAgbWFuaWZlc3RfdmVyc2lvbjogMyxcclxuICBuYW1lOiBcIlJzIEtpdFwiLFxyXG4gIHZlcnNpb246IHBhY2thZ2VKc29uLnZlcnNpb24sXHJcbiAgZGVzY3JpcHRpb246IHBhY2thZ2VKc29uLmRlc2NyaXB0aW9uLFxyXG4gIG9wdGlvbnNfcGFnZTogXCJzcmMvcGFnZXMvb3B0aW9ucy9pbmRleC5odG1sXCIsXHJcbiAgYmFja2dyb3VuZDogeyBzZXJ2aWNlX3dvcmtlcjogXCJzcmMvcGFnZXMvYmFja2dyb3VuZC9pbmRleC5qc1wiIH0sXHJcbiAgYWN0aW9uOiB7XHJcbiAgICBkZWZhdWx0X3BvcHVwOiBcInNyYy9wYWdlcy9wb3B1cC9pbmRleC5odG1sXCIsXHJcbiAgICBkZWZhdWx0X2ljb246IFwiZGV2aWNlXzMyLnBuZ1wiLFxyXG4gIH0sXHJcbiAgaWNvbnM6IHtcclxuICAgIFwiMTI4XCI6IFwiZGV2aWNlXzEyOC5wbmdcIixcclxuICB9LFxyXG4gIGNvbW1hbmRzOiB7XHJcbiAgICBcInJza2l0LXJlbW90ZVwiOiB7XHJcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlJlbW90ZSBEZXZUb29sc1wiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIC8vIGNvbnRlbnRfc2NyaXB0czogW1xyXG4gIC8vICAge1xyXG4gIC8vICAgICBtYXRjaGVzOiBbXCJodHRwOi8vKi8qXCIsIFwiaHR0cHM6Ly8qLypcIiwgXCI8YWxsX3VybHM+XCJdLFxyXG4gIC8vICAgICBqczogW1wic3JjL3BhZ2VzL2NvbnRlbnQvaW5kZXguanNcIl0sXHJcbiAgLy8gICAgIGNzczogW1wiYXNzZXRzL2Nzcy9jb250ZW50U3R5bGUuY2h1bmsuY3NzXCJdLFxyXG4gIC8vICAgfSxcclxuICAvLyBdLFxyXG4gIGRldnRvb2xzX3BhZ2U6IFwic3JjL3BhZ2VzL2RldnRvb2xzL2luZGV4Lmh0bWxcIixcclxuICBwZXJtaXNzaW9uczogW1widGFic1wiLCBcImNvbnRleHRNZW51c1wiXSxcclxuICB3ZWJfYWNjZXNzaWJsZV9yZXNvdXJjZXM6IFtcclxuICAgIHtcclxuICAgICAgcmVzb3VyY2VzOiBbXHJcbiAgICAgICAgXCJhc3NldHMvanMvKi5qc1wiLFxyXG4gICAgICAgIFwiYXNzZXRzL2Nzcy8qLmNzc1wiLFxyXG4gICAgICAgIFwiZGV2aWNlXzEyOC5wbmdcIixcclxuICAgICAgICBcImRldmljZV8zMi5wbmdcIixcclxuICAgICAgXSxcclxuICAgICAgbWF0Y2hlczogW1wiKjovLyovKlwiXSxcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1hbmlmZXN0O1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZTLFNBQVMsb0JBQW9CO0FBQzFVLE9BQU8sV0FBVztBQUNsQixPQUFPQSxTQUFRLFdBQUFDLGdCQUFlOzs7QUNGaVUsWUFBWSxRQUFRO0FBQ25YLFlBQVksVUFBVTs7O0FDQ1AsU0FBUixTQUEwQixTQUFpQixNQUFrQjtBQUNsRSxNQUFJLFFBQWdCLFFBQVEsT0FBTztBQUVuQyxVQUFRLE1BQU07QUFBQSxJQUNaLEtBQUs7QUFDSCxjQUFRLE9BQU87QUFDZjtBQUFBLElBQ0YsS0FBSztBQUNILGNBQVEsT0FBTztBQUNmO0FBQUEsSUFDRixLQUFLO0FBQ0gsY0FBUSxPQUFPO0FBQ2Y7QUFBQSxJQUNGLEtBQUs7QUFDSCxjQUFRLE9BQU87QUFDZjtBQUFBLEVBQ0o7QUFFQSxVQUFRLElBQUksT0FBTyxPQUFPO0FBQzVCO0FBRUEsSUFBTSxTQUFTO0FBQUEsRUFDYixPQUFPO0FBQUEsRUFDUCxRQUFRO0FBQUEsRUFDUixLQUFLO0FBQUEsRUFDTCxZQUFZO0FBQUEsRUFDWixPQUFPO0FBQUEsRUFDUCxTQUFTO0FBQUEsRUFDVCxRQUFRO0FBQUEsRUFDUixTQUFTO0FBQUEsRUFDVCxPQUFPO0FBQUEsRUFDUCxTQUFTO0FBQUEsRUFDVCxVQUFVO0FBQUEsRUFDVixRQUFRO0FBQUEsRUFDUixXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixTQUFTO0FBQUEsRUFDVCxTQUFTO0FBQUEsRUFDVCxPQUFPO0FBQUEsRUFDUCxTQUFTO0FBQUEsRUFDVCxVQUFVO0FBQUEsRUFDVixRQUFRO0FBQUEsRUFDUixXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixTQUFTO0FBQ1g7OztBQzdDQSxJQUFNLGlCQUFOLE1BQXFCO0FBQUEsRUFHWCxjQUFjO0FBQUEsRUFBQztBQUFBLEVBRXZCLE9BQU8sd0JBQXdCQyxXQUE0QjtBQUN6RCxXQUFPLEtBQUssVUFBVUEsV0FBVSxNQUFNLENBQUM7QUFBQSxFQUN6QztBQUNGO0FBRUEsSUFBTywwQkFBUTs7O0FGWmYsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTSxFQUFFLFFBQVEsSUFBSTtBQUVwQixJQUFNLFNBQVMsUUFBUSxrQ0FBVyxNQUFNLE1BQU0sUUFBUTtBQUV2QyxTQUFSLGFBQ0xDLFdBQ2M7QUFDZCxTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixXQUFXO0FBQ1QsVUFBSSxDQUFJLGNBQVcsTUFBTSxHQUFHO0FBQzFCLFFBQUcsYUFBVSxNQUFNO0FBQUEsTUFDckI7QUFFQSxZQUFNLGVBQWUsUUFBUSxRQUFRLGVBQWU7QUFFcEQsTUFBRztBQUFBLFFBQ0Q7QUFBQSxRQUNBLHdCQUFlLHdCQUF3QkEsU0FBUTtBQUFBLE1BQ2pEO0FBRUEsZUFBUyxnQ0FBZ0MsZ0JBQWdCLFNBQVM7QUFBQSxJQUNwRTtBQUFBLEVBQ0Y7QUFDRjs7O0FHNUJlLFNBQVIsc0JBQXFEO0FBQzFELFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLHNCQUFzQjtBQUNwQixhQUFPO0FBQUEsUUFDTCxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUtOLE9BQU87QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjs7O0FDaEJtVixZQUFZQyxXQUFVO0FBRXpXLFNBQVMsb0JBQW9CO0FBRjdCLElBQU1DLG9DQUFtQztBQUl6QyxJQUFNLFFBQVEsUUFBUSxJQUFJLFlBQVk7QUFFdEMsSUFBTSxhQUFhO0FBRW5CLFNBQVMsaUJBQWlCLFVBQTBCO0FBQ2xELFNBQU87QUFBQSxJQUNBLGNBQVFDLG1DQUFXLE1BQU0sVUFBVSxjQUFjLFFBQVE7QUFBQSxJQUM5RCxFQUFFLFVBQVUsT0FBTztBQUFBLEVBQ3JCO0FBQ0Y7QUFPZSxTQUFSLE9BQXdCLFFBQStCO0FBQzVELFFBQU0sRUFBRSxhQUFhLE9BQU8sT0FBTyxLQUFLLElBQUksVUFBVSxDQUFDO0FBQ3ZELFFBQU0sdUJBQXVCO0FBQzdCLFFBQU0sV0FBVztBQUVqQixRQUFNLGdCQUFnQixRQUFRLGlCQUFpQixXQUFXLElBQUk7QUFDOUQsUUFBTSxjQUFjLFFBQVEsaUJBQWlCLFNBQVMsSUFBSTtBQUUxRCxTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixVQUFVLElBQUk7QUFDWixVQUFJLE9BQU8sd0JBQXdCLE9BQU8sVUFBVTtBQUNsRCxlQUFPLGNBQWMsRUFBRTtBQUFBLE1BQ3pCO0FBQUEsSUFDRjtBQUFBLElBQ0EsS0FBSyxJQUFJO0FBQ1AsVUFBSSxPQUFPLGNBQWMsb0JBQW9CLEdBQUc7QUFDOUMsZUFBTyxhQUFhLGdCQUFnQjtBQUFBLE1BQ3RDO0FBRUEsVUFBSSxPQUFPLGNBQWMsUUFBUSxHQUFHO0FBQ2xDLGVBQU8sT0FBTyxjQUFjO0FBQUEsTUFDOUI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGO0FBRUEsU0FBUyxjQUFjLElBQVk7QUFDakMsU0FBTyxPQUFPO0FBQ2hCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NBLElBQU0sV0FBc0M7QUFBQSxFQUMxQyxrQkFBa0I7QUFBQSxFQUNsQixNQUFNO0FBQUEsRUFDTixTQUFTLGdCQUFZO0FBQUEsRUFDckIsYUFBYSxnQkFBWTtBQUFBLEVBQ3pCLGNBQWM7QUFBQSxFQUNkLFlBQVksRUFBRSxnQkFBZ0IsZ0NBQWdDO0FBQUEsRUFDOUQsUUFBUTtBQUFBLElBQ04sZUFBZTtBQUFBLElBQ2YsY0FBYztBQUFBLEVBQ2hCO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxPQUFPO0FBQUEsRUFDVDtBQUFBLEVBQ0EsVUFBVTtBQUFBLElBQ1IsZ0JBQWdCO0FBQUEsTUFDZCxhQUFhO0FBQUEsSUFDZjtBQUFBLEVBQ0Y7QUFBQSxFQVFBLGVBQWU7QUFBQSxFQUNmLGFBQWEsQ0FBQyxRQUFRLGNBQWM7QUFBQSxFQUNwQywwQkFBMEI7QUFBQSxJQUN4QjtBQUFBLE1BQ0UsV0FBVztBQUFBLFFBQ1Q7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxTQUFTLENBQUMsU0FBUztBQUFBLElBQ3JCO0FBQUEsRUFDRjtBQUNGO0FBRUEsSUFBTyxtQkFBUTs7O0FOM0NmLElBQU1DLG9DQUFtQztBQVF6QyxJQUFNLE9BQU9DLFNBQVFDLG1DQUFXLEtBQUs7QUFDckMsSUFBTSxXQUFXRCxTQUFRLE1BQU0sT0FBTztBQUN0QyxJQUFNLFlBQVlBLFNBQVEsTUFBTSxRQUFRO0FBQ3hDLElBQU1FLFVBQVNGLFNBQVFDLG1DQUFXLE1BQU07QUFDeEMsSUFBTSxZQUFZRCxTQUFRQyxtQ0FBVyxRQUFRO0FBRTdDLElBQU1FLFNBQVEsUUFBUSxJQUFJLFlBQVk7QUFHdEMsSUFBTSw4QkFBOEI7QUFFcEMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLE1BQ1IsV0FBVztBQUFBLE1BQ1gsVUFBVTtBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixhQUFhLGdCQUFRO0FBQUEsSUFDckIsb0JBQW9CO0FBQUEsSUFDcEIsT0FBTyxFQUFFLFlBQVksNkJBQTZCLE1BQU0sS0FBSyxDQUFDO0FBQUEsRUFDaEU7QUFBQSxFQUNBO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFBRDtBQUFBLElBQ0EsV0FBV0M7QUFBQSxJQUNYLGVBQWU7QUFBQSxNQUNiLE9BQU87QUFBQSxRQUNMLFVBQVVILFNBQVEsVUFBVSxZQUFZLFlBQVk7QUFBQSxRQUNwRCxPQUFPQSxTQUFRLFVBQVUsU0FBUyxZQUFZO0FBQUEsUUFDOUMsU0FBU0EsU0FBUSxVQUFVLFdBQVcsVUFBVTtBQUFBLFFBQ2hELFlBQVlBO0FBQUEsVUFDVjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBRUY7QUFBQSxRQUNBLGNBQWNBLFNBQVEsVUFBVSxXQUFXLFlBQVk7QUFBQSxRQUN2RCxPQUFPQSxTQUFRLFVBQVUsU0FBUyxZQUFZO0FBQUEsUUFDOUMsUUFBUUEsU0FBUSxVQUFVLFVBQVUsWUFBWTtBQUFBLFFBQ2hELFNBQVNBLFNBQVEsVUFBVSxXQUFXLFlBQVk7QUFBQSxNQUNwRDtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ04sZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCRyxTQUNaLHdCQUNBO0FBQUEsUUFDSixnQkFBZ0IsQ0FBQyxjQUFjO0FBQzdCLGdCQUFNLEVBQUUsS0FBSyxNQUFNLE1BQU0sSUFBSUMsTUFBSyxNQUFNLFVBQVUsSUFBSTtBQUN0RCxnQkFBTSxjQUFjLGVBQWUsSUFBSSxNQUFNLEdBQUcsQ0FBQztBQUNqRCxnQkFBTSxPQUFPLGNBQWMsZUFBZSxLQUFLO0FBQy9DLGlCQUFPLGdCQUFnQjtBQUFBLFFBQ3pCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQztBQUVELFNBQVMsZUFBa0IsT0FBd0I7QUFDakQsUUFBTSxTQUFTLE1BQU07QUFDckIsUUFBTSxZQUFZLFNBQVM7QUFDM0IsU0FBTyxNQUFNO0FBQ2Y7QUFFQSxTQUFTLGVBQWUsS0FBYTtBQUNuQyxRQUFNLGdCQUFnQixJQUFJLE9BQU8sY0FBYyxHQUFHO0FBQ2xELFNBQU8sSUFBSSxZQUFZLEVBQUUsUUFBUSxlQUFlLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQztBQUN4RTsiLAogICJuYW1lcyI6IFsicGF0aCIsICJyZXNvbHZlIiwgIm1hbmlmZXN0IiwgIm1hbmlmZXN0IiwgInBhdGgiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUiLCAiX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUiLCAicmVzb2x2ZSIsICJfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSIsICJvdXREaXIiLCAiaXNEZXYiLCAicGF0aCJdCn0K

try {
  chrome.devtools.panels.create(
    "Rs kit",
    "icon-34.png",
    "src/pages/panel/index.html"
  );
} catch (e) {
  console.error(e);
}

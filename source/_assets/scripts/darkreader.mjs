import DarkReader from "https://cdn.jsdelivr.net/npm/darkreader@4.9.87/+esm";

DarkReader.setFetchMethod(window.fetch);

document.addEventListener("DOMContentLoaded", () => {
  DarkReader.auto();
});

import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";

mermaid.initialize({
  startOnLoad: false,
  securityLevel: "loose",
  // theme: window.matchMedia("(prefers-color-scheme: dark)").matches
  //   ? "dark"
  //   : "default",
});

mermaid.run({
  querySelector: ".language-mermaid",
});

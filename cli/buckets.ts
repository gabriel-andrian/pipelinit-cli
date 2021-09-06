export default {
  key: "pipelinit",
  optionsUrl: import.meta.url,
  entry: "pipelinit.ts",
  buckets: [
    {
      name: "templates",
      folder: "../core/templates",
    },
  ],
  output: "app.bundle.js",
};

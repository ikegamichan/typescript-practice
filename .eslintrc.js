module.exports = {
  root: true,
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json",
  },
  extends: [
    "./eslint-configs/base.js",
    "./eslint-configs/next.js",
    "./eslint-configs/react.js",
    "./eslint-configs/typescript.js",
  ],
};

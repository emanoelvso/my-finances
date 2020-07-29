module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: [
    "standard",
    "plugin:promise/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["promise", "prettier"],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": "error",
  },
};

module.exports = {
  root: true,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    version: "17.0.1",
  },
  extends: ["prettier", "plugin:react/recommended"],
  plugins: ["react", "jsx-a11y", "import"],
  rules: {
    semi: [2, "always"],
    "react/prefer-stateless-function": "off",
    "react/prop-types": "off",
    "react/no-danger": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight", "to"],
        aspects: ["noHref", "invalidHref", "preferButton"],
      },
    ],
    "no-empty": "warn",
  },
  settings: {
    "import/core-modules": [],
    "import/resolver": {
      alias: [["~", "./"]],
    },
    react: {
      pragma: "React", // Pragma to use, default to "React"
      fragment: "Fragment", // Fragment to use (may be a property of <pragma>), default to "Fragment"
      version: "detect", // React version. "detect" automatically picks the version you have installed.
      // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
      // default to latest and warns if missing
      // It will default to "detect" in the future
      flowVersion: "0.53", // Flow version
    },
  },
  env: {
    browser: true,
    amd: true,
    node: true,
  },
};

module.exports = {
  env: {
    node: true,
    commonjs: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
      rules: {
        "no-inline-comments": "off", // Disable the no-inline-comments rule for JavaScript files
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    indent: [
      "error",
      2,
      {
        SwitchCase: 1,
        ignoredNodes: ["ConditionalExpression"],
        flatTernaryExpressions: true,
      },
    ],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "no-unused-vars": [
      "error",
      { vars: "all", args: "none", ignoreRestSiblings: true },
    ],
    "no-prototype-builtins": "off",
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        semi: true,
        tabWidth: 2,
        useTabs: false,
        trailingComma: "es5",
        bracketSpacing: true,
        endOfLine: "lf",
      },
      { usePrettierrc: false },
    ],
  },
};

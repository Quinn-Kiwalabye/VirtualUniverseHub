module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    // Disable specific rules or adjust their configurations as needed
    "react/no-unescaped-entities": 0,
    "react/jsx-max-props-per-line": 0,
    "react/jsx-first-prop-new-line": 0,
    "no-console": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "no-nested-ternary": 0,
    "consistent-return": 0,
    "no-alert": 0,
    "import/extensions": 0,
    "linebreak-style": 0,
    "react/state-in-constructor": 0,
    "import/prefer-default-export": 0,
    "react/jsx-props-no-spreading": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/alt-text": 0,
    "jsx-a11y/no-autofocus": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "react/no-array-index-key": 0,

    // Adjusted or added rules
    "react/react-in-jsx-scope": "off", // You might want to keep this rule enabled
    "react/jsx-props-no-spreading": "off", // You have already disabled this rule
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }], // Allow .js and .jsx files for JSX
    "react/jsx-one-expression-per-line": [2, { allow: "literal" }], // Adjusted to allow 'literal'
    "object-curly-spacing": [2, "always"], // Adjusted for consistent object-curly-spacing
    "max-len": [2, { code: 120 }], // Adjusted max line length

    // Add a newline at the end of files
    "eol-last": [2, "always"],

    // You can adjust or add more rules as needed for your project
  },
};

module.exports = {
    env: {
        "browser": true,
        "es6": true
    },
    extends: ["airbnb", "prettier", "prettier/react"],

    globals: {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    parserOptions: {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    plugins: [
        "react",
        "prettier",
        "better-styled-components"
    ],
    rules: {
      "prettier/prettier": "error",
      "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
      "react/jsx-props-no-spreading": 0,
      "import/prefer-default-export": "off",
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "react/jsx-one-expression-per-line": "off",
      "global-require": "off",
      "react-native/no-raw-text": "off",
      "no-param-reassign": "off",
      "no-underscore-dangle": "off",
      camelcase: "off",
      "no-console": ["error", { allow: ["tron", "warn", "log", "error"] }],
      "better-styled-components/sort-declarations-alphabetically": 2
    },
};

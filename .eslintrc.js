const path = require("path");
module.exports = {
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: "."
  },
  plugins: ["prettier"],
  extends: [
    "airbnb",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"
  ],
  rules: {
    "import/named": "off",
    /**
     * @bug?
     * "import/export" temporary disable.
     */
    "import/export": "off",
    "import/prefer-default-export": "off", // Allow single Named-export
    "no-unused-expressions": [
      "warn",
      {
        allowShortCircuit: true,
        allowTernary: true
      }
    ], // https://eslint.org/docs/rules/no-unused-expressions

    /**
     * @description rules of eslint-plugin-react
     */
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".jsx", ".tsx"]
      }
    ], // also want to use with ".tsx"
    "react/prop-types": "off", // Is this incompatible with TS props type?

    /**
     * @description rules of eslint-plugin-react-hooks
     */
    "react-hooks/rules-of-hooks": "error",

    /**
     * @description rules of eslint-plugin-prettier
     */
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        semi: false
      }
    ]
  }
};

// https://eslint.org/docs/rules/
// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin

module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "tsconfig.json",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "@typescript-eslint/tslint"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  "rules": {

    /* GENERAL ERRORS */

    /*"no-console": "error", Review and Remove */
    "no-dupe-else-if": "error",
    "no-import-assign": "error",
    "no-setter-return": "error",
    "no-template-curly-in-string": "error",

    /* BEST PRACTICES */

    "accessor-pairs": "error",
    "array-callback-return": "error",
    "consistent-return": "error",
    "eqeqeq": "error",
    /*  "default-case": "error", */
    "max-len": ["error", { "code": 200, }],
    /* "no-alert": "error", Review and Remove */
    "no-eval": "error",
    "no-fallthrough": "error",
    "no-labels": "error",
    "no-param-reassign": "error",
    "no-sequences": "error",
    "no-unused-expressions": "error",
    "no-useless-concat": "error",
    "radix": ["error", "always"],
    "vars-on-top": "error",

    /* "max-params": ["error", { "max": 3 }], */

    /* ECMASCRIPT */

    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": "error",
    "constructor-super": "error",
    /*  "no-confusing-arrow": "error", // read more what this does */
    "no-dupe-class-members": "error",
    "no-duplicate-imports": "error",
    "no-this-before-super": "error",
    "no-useless-computed-key": "error",
    /* "object-shorthand": "error", not sure if I like this one */

    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-rest-params": "error",
    "prefer-template": "error",
    /*   "sort-imports": "error" // investigate when I have time */
    "template-curly-spacing": ["error", "never"],

    /* TYPESCRIPT SUPPORTED RULES */

    "@typescript-eslint/array-type": [
      "error",
      { "default": "array" }
    ],
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/member-ordering": [
      "error",
      {
        "default":
          [
            'private-field',
            'protected-field',
            'public-field',
            'public-method',
            'protected-method',
            'private-method',
          ]
      }
    ],
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-implied-eval": "error",
    "@typescript-eslint/no-inferrable-types": "off", // this is just my style choice
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "@typescript-eslint/no-throw-literal": "error",
    "@typescript-eslint/no-type-alias": "error",
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    /*  "@typescript-eslint/no-unnecessary-condition" : "error", to be turned on when I have time, affected by lang hack */
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { "argsIgnorePattern": "^_" } // ignore if starting with _
    ],
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-includes": "off", // IE
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/prefer-readonly": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "off", // IE
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/restrict-template-expressions": ["error",
      {
        allowNumber: true,
        allowBoolean: true,
        allowNullable: false,
      }],
    "@typescript-eslint/unified-signatures": "error",

    /* TYPESCRIPT EXTENSION RULES - Generally need to turn off ESLint rule and override with typescript one */

    // extensions
    /*
        "brace-style": "off",
        "@typescript-eslint/brace-style": "error", // when I have time */
    "@typescript-eslint/default-param-last": "error",
    "no-extra-parens": "off",
    "@typescript-eslint/no-extra-parens": "error",
    "no-extra-semi": "off",
    "@typescript-eslint/no-extra-semi": "error",
    /*  "no-magic-numbers": "off",
      "@typescript-eslint/no-magic-numbers": ["error", { "ignoreNumericLiteralTypes": true }]

      // this is just painful */
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": ["error"],
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "error",
    "quotes": "off",
    "@typescript-eslint/quotes": ["error", "single"],
    "@typescript-eslint/return-await": "error",
    "semi": "off",
    "@typescript-eslint/semi": ["error"],
    /*   "space-before-function-paren": "off",
       "@typescript-eslint/space-before-function-paren": ["error"] */
  }
};

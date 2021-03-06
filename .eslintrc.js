// adapted from: https://github.com/Khan/style-guides/pull/25
module.exports = {
  "parser": "babel-eslint",
  "plugins": [
    "react"
  ],
  "ecmaFeatures": {
    "jsx": true,
    "modules": true
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "mocha": true
  },
  "rules": {
    "arrow-parens": [2, "always"],
    "arrow-spacing": 2,
    "brace-style": 2,
    "camelcase": [2, {
      "properties": "always"
    }],
    "comma-dangle": [2, "never"],
    "comma-spacing": [2, {
      "before": false,
      "after": true
    }],
    "eol-last": [0],
    "guard-for-in": 2,
    "indent": [2, 2],
    "keyword-spacing": 2,
    "linebreak-style": [2, "unix"],
    "max-len": [2, 80, 4, {
      "ignoreUrls": true,
      "ignorePattern": "^\\s*const\\s.+=\\s*require\\s*\\("
    }],
    "no-alert": 2,
    "no-array-constructor": 2,
    "no-const-assign": 2,
    "no-debugger": 2,
    "no-dupe-keys": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-new-object": 2,
    "no-spaced-func": 2,
    "no-this-before-super": 2,
    "no-throw-literal": 2,
    "no-trailing-spaces": 2,
    "no-unreachable": 2,
    "no-unused-vars": 1,
    "no-var": 2,
    "object-curly-spacing": [2, "always"],
    "one-var": [2, "never"],
    "prefer-const": 1,
    "prefer-template": 2,
    "quotes": [2, "single"],
    "react/jsx-no-undef": 2,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    //"react/prop-types": 2,
    "react/react-in-jsx-scope": 2,
    "react/sort-comp": [2],
    "semi": [2, "always"],
    "sort-imports": 2,
    "space-before-blocks": 2,
    "space-before-function-paren": [2, {
      "anonymous": "always",
      "named": "never"
    }],
    "space-infix-ops": 2,
    "strict": [1, "never"],
    "valid-jsdoc": 2
  },
  "extends": "eslint:recommended"
}

module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "linebreak-style": 0,
        "global-require": 0,
        "eslint linebreak-style": [0, "error", "windows"],
        "import/no-named-as-default": 0,
        "import/newline-after-import": "warn",
        "semi" : "warn",
        "react/no-unused-state": "off",
        "comma-dangle": "warn",
        "quotes": "off",
        "indent": "warn",
        "arrow-parens": "off",
        "react/jsx-filename-extension": "off",
        "react/jsx-one-expression-per-line": "off",
        "no-else-return": "off",
        "no-trailing-spaces": "off",
        "eol-last": "warn",
        "react/jsx-closing-tag-location": "warn",
        "react/jsx-indent": "warn",
        "import/no-named-as-default-member": "off"
    }
};
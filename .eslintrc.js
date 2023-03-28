module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "airbnb",
        "airbnb-typescript",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "./tsconfig.json",
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/quotes": [2, "double"],
        "@typescript-eslint/comma-dangle": "off",
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/semi": "off",
        "react/no-unused-class-component-methods": "off",
        "react/destructuring-assignment": "off",
        "react/jsx-indent-props": [2, 4],
        "react/button-has-type": "off",
        "react/jsx-indent": [2, 4],
        "react/sort-comp": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "import/prefer-default-export": "off",
        "no-unsafe-optional-chaining": "off",
        "no-nonoctal-decimal-escape": "off",
        "no-promise-executor-return": "off",
        "no-trailing-spaces": "off",
        "consistent-return": "off",
        "arrow-body-style": "off",
        "linebreak-style": "off",
        "default-case": "off",
        "arrow-parens": "off",
        "no-plusplus": "off",
        "no-console": "off",
    }
};

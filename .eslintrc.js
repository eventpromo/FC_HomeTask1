module.exports = {
    "extends": "airbnb-base",
    "rules": {
        "indent": ["error", 2],
        "linebreak-style": ["error", "windows"],
    },
    "env": {
        "es6": true,
        "node": true,
        "browser": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module"
    },
};
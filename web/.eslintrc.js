module.exports = {
    "extends": "airbnb-base",
    "rules": {
        "indent": ["error", 2],
        "linebreak-style": 0,
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
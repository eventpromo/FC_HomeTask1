
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const path = require('path');

module.exports = {
    context: __dirname,
    devtool: "source-map",
    entry: [
        "whatwg-fetch",
        "@babel/polyfill",
        "@webcomponents/webcomponentsjs/webcomponents-bundle.js",
        "url-polyfill",
        "url-search-params-polyfill",
        "./js/app.js",
    ],
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },    
    module: {
        rules: [            
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,                
                use: {
                    loader: 'babel-loader',              
                }
            },
            {
                test: /web-components\//,
                use: {
                    loader: 'web-components-loader',              
                }
            }
        ]
    },
    plugins: [
    ]
}
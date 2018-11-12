const webpack = require('webpack');

module.exports = {
    context: __dirname,
    devtool: "source-map",
    entry: "./js/app.js",
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
                    loader: 'babel-loader'                    
                }
            }
        ]
    }
}
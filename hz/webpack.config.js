const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, options) => {
    const mode = options.mode || 'development';

    return {
        mode: 'development',
        entry: ['./src/index.js'],
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist')
        },
        devServer: {
            contentBase: './dist',
            overlay: true
        },
        devtool: 'eval-sourcemap',
        module: {
            rules: [
                // {
                //     enforce: 'pre',
                //     test: /\.(js)$/,
                //     exclude: /node_modules/,
                //     loader: 'eslint-loader',
                // },
                {
                    test: /\.js$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                    },
                },
                {  
                    test: /\.(html)$/,
                    use: {
                        loader: 'html-loader',
                        options: {
                            attrs: [':data-src']
                        }
                    }
                },
                {
                    test: /\.json$/,
                    loader: 'json-loader'
                }                
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html"
            }),
            new CleanWebpackPlugin(),
        ]
    }
}
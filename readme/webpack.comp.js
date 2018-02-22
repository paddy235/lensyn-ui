/*********************************************************************
 * Created by deming-su on 2018/1/10
 *********************************************************************/

const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        "lensyn-ui": ["./devPkg/components/templates/index.js"]
    },
    output: {
        path: path.join(__dirname, './static'),
        publicPath: '/static/',
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'lensyn-ui',
        umdNamedDefine: true
    },
    module: {
        noParse: /es6-promise\.js$/,
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.less$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "less-loader" }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpg|gif|ttf|svg|woff|eot)$/,
                loader: 'url-loader',
                query: {
                    limit: 30000,
                    name: './images/[name].[ext]?[hash]'
                }
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new UglifyJsPlugin({
            uglifyOptions: {
                ie8: true,
                output: {
                    comments: false,
                    beautify: false
                },
                warnings: false
            }
        })
    ]
};
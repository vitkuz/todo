const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: './src/client/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use:[
                    { loader: 'css-loader', options: { importLoaders: 1, sourceMap: true } },
                    { loader: 'postcss-loader', options: {
                        config: {
                            ctx: {
                                cssnext: true,
                                cssnano: true,
                                autoprefixer: true
                            }
                        },
                        sourceMap:true } }]
            })
        },
        {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use:[
                    { loader: 'css-loader', options: { importLoaders: 1, sourceMap: true } },
                    { loader: 'postcss-loader', options: {
                        config: {
                            ctx: {
                                cssnext: true,
                                cssnano: true,
                                autoprefixer: true
                            }
                        },
                        sourceMap:true } },
                    { loader: 'less-loader', options: {sourceMap: true } }]
            })
        },
        ]

    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
    ],
    devtool: false
};
const HTMLWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const build = require('../build.json')

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: build.indexHTML,
            templateParameters: build,
            minify: true,
        })
    ]
});

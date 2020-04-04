const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const build = require('../build.json')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        quiet: true,
        host: '0.0.0.0',
        overlay: true,
        hot: true,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: build.indexHTML,
            templateParameters: build,
        })
    ]
});

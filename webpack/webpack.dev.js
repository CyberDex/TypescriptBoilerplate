const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const build = require('../build.json')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: build.assets[0].from,
        quiet: true,
        host: '0.0.0.0',
        overlay: true,
        hot: true,
        compress: true
    },
    plugins: [
        new FriendlyErrorsWebpackPlugin()
    ]
});

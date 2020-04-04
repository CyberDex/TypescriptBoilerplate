const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

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
        new FriendlyErrorsWebpackPlugin()
    ]
});

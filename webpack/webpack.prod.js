const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const build = require('../build.json')

module.exports = [merge(common, {
    mode: 'production',
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    }
}),
{
    entry: build.input,
    output: build.output,
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin(build.assets),
    ]
}
];

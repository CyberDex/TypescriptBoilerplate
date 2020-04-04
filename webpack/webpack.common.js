const CopyWebpackPlugin = require('copy-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { CheckerPlugin } = require('awesome-typescript-loader')
const build = require('../build.json')

module.exports = {
    entry: build.input,
    output: build.output,
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader',
            exclude: /node_modules/,
            options: {
                transpileOnly: true,
                happyPackMode: true
            }
        }]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    plugins: [
        new HardSourceWebpackPlugin(),
        new CheckerPlugin(),
        new CleanWebpackPlugin(),
        new ForkTsCheckerWebpackPlugin({ silent: true, checkSyntacticErrors: true }),
        new FriendlyErrorsWebpackPlugin(),
        new CopyWebpackPlugin(build.assets),
    ]
}
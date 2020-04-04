const HTMLWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
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
        new ForkTsCheckerWebpackPlugin({ silent: true, checkSyntacticErrors: true }),
        new HTMLWebpackPlugin({
            template: build.indexHTML,
            templateParameters: build,
        })
    ]
}
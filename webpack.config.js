
const webpackConfig = require('../webpack-typescript-boilerplate/webpack')

module.exports = webpackConfig({
    entryPoints: {
        main: "src/main.ts"
    },
    sourceFolder: "src",
    assetsFolder: "assets",
    HTMLTemplate: "assets/index.html",
    templateParameters: {
        "title": ""
    },
    analyze: true
})
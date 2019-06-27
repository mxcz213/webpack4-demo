const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: './src/index.js',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack 4 production',
            template: 'index.html',
            filename: 'index.html'
        }),
    ],
    output: {
        filename: '[name].bandle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
        ]
    }
}
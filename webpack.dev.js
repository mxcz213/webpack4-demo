const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
const theme = require('./src/theme')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true,
        hotOnly: true,
        open: false,  //自动打开浏览器
        port: 9000,
        overlay: {
            warnings: false,
            errors: true
        }
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test:/\.css$/,
                use:[
                  'style-loader',
                  'css-loader',
                  'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                  'style-loader',
                  'css-loader',
                  'postcss-loader',
                  {
                    loader: 'less-loader',
                    options: {'modifyVars':theme,'javascriptEnabled': true}
                  }
                ]
            }
        ]
    }
})
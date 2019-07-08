const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const theme = require('./src/theme')

module.exports = {
    entry: {
        app: './src/main.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack 4 production',
            template: 'index.html',
            filename: 'index.html'
        }),
    ],
    output: {
        filename: 'js/[name].[hash:8].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.css', '.less']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: path.resolve(__dirname, 'node_modules'),
                include:path.resolve(__dirname, 'src')
            },
            {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                loader: 'url-loader',
                include: /fonts?/,
                options: {
                    limit: 1024,
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                exclude: /fonts?/,
                options: {
                    limit: 4096,                                
                    name: 'images/[name].[hash:7].[ext]'                        
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 4096,
                    name: 'media/[name].[hash:7].[ext]'
                }
            },
        ]
    }
}
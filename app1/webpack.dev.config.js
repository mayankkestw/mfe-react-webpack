const path = require('path')
const { merge } = require('webpack-merge')

const common = require('./webpack.common.config')

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        port: 9001,
        static: {
            directory: path.resolve(__dirname, './dist')
        },
        devMiddleware: {
            writeToDisk: true
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ]
    },
})
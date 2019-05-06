const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
    devtool: 'inline-source-map',
    mode: 'development',
    devServer: {
        port: 8070,
        contentBase: './dist',
        hot: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        stats: { colors: true }
    }
})

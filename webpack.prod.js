const merge = require('webpack-merge')
const common = require('./webpack.common')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = merge(common, {
    optimization: {
        minimize: true
    },
    mode: 'production',
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
            reportFilename: 'bundle_sizes.html'
        })
    ],
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    }
})

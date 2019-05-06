const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                /**
                 * Babel presets and plungins are present in ./.babelrc
                 * So defining presets or plugins in options is not required
                 */
                // options: {}
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: function () {
                            return [
                                require('precss'),
                                require('autoprefixer')
                            ];
                        }
                    }
                }, { loader: 'sass-loader' }],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'file-loader?name=[path][name].[ext]'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader?name=[path][name].[ext]'
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.json', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            'react-dom': '@hot-loader/react-dom',
            "@module-error": path.resolve(__dirname, 'src/components/errors-warnings-messages'),
        }
    },
    optimization: {
        minimize: false
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ]
}

const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const resolveAliasPath = (dir: string) => path.join(__dirname, 'src', dir);

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      },
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        enforce: 'pre'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [require('precss'), require('autoprefixer')];
              }
            }
          },
          { loader: 'sass-loader' }
        ]
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
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      '@module-error': resolveAliasPath('components/errors-warnings-messages')
    }
  },
  optimization: {
    minimize: false
  },
  plugins: [
    new HTMLWebpackPlugin({
      inject: true,
      template: './src/index.html'
    })
  ],
  externals: {
    React: 'react',
    ReactDOM: 'react-dom'
  }
};

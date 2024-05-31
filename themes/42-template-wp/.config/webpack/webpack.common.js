const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  stats: 'minimal',
  entry: path.resolve(__dirname, '../../src/main.js'),
  output: {
    path: path.resolve(__dirname, '../../dist/'),
    filename: 'bundle.js',
    chunkFilename: pathData => {
      return typeof pathData.chunk.id == 'string' && pathData.chunk.id.includes('node_modules')
        ? 'src_async-apline.[contenthash].bundle.js'
        : '[name].[contenthash].bundle.js';
    },
  },
  resolve: {
    extensions: ['*', '.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm-bundler.js',
      '@': path.resolve(__dirname, '../../src/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      ...(() => {
        const rules = [];

        const loaders = [
          { test: /\.(css|postcss)$/i },
          { test: /\.s[ac]ss$/i, loader: 'sass-loader' },
          { test: /\.less$/i, loader: 'less-loader' },
          { test: /\.styl$/i, loader: 'stylus-loader' },
        ];

        loaders.forEach((element, index) => {
          rules.push({
            test: element.test,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  postcssOptions: require(path.resolve(__dirname, '../postcss.config.js')),
                },
              },
            ],
          });

          if (element.loader) rules[index].use.push(element.loader);
        });

        return rules;
      })(),
    ],
  },
  plugins: [
    /**
     * docs: https://webpack.js.org/plugins/mini-css-extract-plugin
     */
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['*.bundle.js'],
    }),

    new MiniCssExtractPlugin({
      filename: './bundle.css',
      chunkFilename: '[id].css',
    }),
  ],
};

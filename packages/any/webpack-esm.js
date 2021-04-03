const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'production',
  target: 'es6',
  output: {
    path: path.join(__dirname, './build/esm'),
    filename: `[name].js`,
  },
  entry: {
    Any: path.join(__dirname, 'src/Any.tsx'),
    elements: path.join(__dirname, 'src/elements.tsx'),
    'resets/any-reset': path.join(__dirname, 'src/resets/any-reset.ts'),
    'resets/element-reset-map': path.join(
      __dirname,
      'src/resets/element-reset-map.ts'
    ),
    'resets/global-reset': path.join(__dirname, 'src/resets/global-reset.ts'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript',
              [
                '@babel/preset-react',
                { runtime: 'automatic', importSource: '@emotion/react' },
              ],
            ],
            plugins: [
              '@emotion/babel-plugin',
              '@babel/plugin-transform-runtime',
            ],
          },
        },
      },
    ],
  },
}

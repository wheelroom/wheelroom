const path = require('path')
const webpack = require('webpack')

const moduleTypes = ['esm']
const entries = ({ srcName, srcExt }) =>
  moduleTypes.reduce((result, moduleType) => {
    let type
    if (moduleType === 'esm') type = 'module'
    result[`${moduleType}/${srcName}`] = {
      filename: `[name].js`,
      import: `./src/${srcName}.${srcExt}`,
      library: { type, umdNamedDefine: moduleType === 'umd' },
    }
    return result
  }, {})

module.exports = {
  experiments: {
    outputModule: true,
  },
  mode: 'production',
  target: 'es6',
  output: {
    path: path.join(__dirname, './build'),
    // filename: `[name].js`,
  },
  externals: {
    react: 'react',
    reactDOM: 'react-dom',
    emotionCss: '@emotion/css',
    emotionReact: '@emotion/react',
  },
  entry: {
    ...entries({ srcName: 'Any', srcExt: 'tsx' }),
    ...entries({ srcName: 'elements', srcExt: 'tsx' }),
    ...entries({ srcName: 'resets/any-reset', srcExt: 'ts' }),
    ...entries({ srcName: 'resets/element-reset-map', srcExt: 'ts' }),
    ...entries({ srcName: 'resets/global-reset', srcExt: 'ts' }),
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
        },
      },
    ],
  },
}

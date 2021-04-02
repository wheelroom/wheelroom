const path = require('path')
const webpack = require('webpack')

// Generate the webpack config we need for generating a apge
module.exports = ({ entry }) => {
  return {
    entry: [path.join(__dirname, `../src/${entry}`)],
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
}

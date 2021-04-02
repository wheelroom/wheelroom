const path = require('path')

// Generate the webpack config we need for development
module.exports = ({ entry }) => {
  return {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
      path: path.join(__dirname, '../build'),
      filename: `${entry}.[fullhash].js`,
    },
  }
}

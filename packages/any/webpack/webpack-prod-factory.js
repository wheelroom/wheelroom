const path = require('path')

// Generate the webpack config we need for production
module.exports = ({ entry }) => {
  return {
    mode: 'production',
    devtool: 'source-map',
    output: {
      path: path.join(__dirname, '../build'),
      filename: `${entry}.js`,
    },
  }
}

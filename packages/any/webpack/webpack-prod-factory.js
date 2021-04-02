const path = require('path')

// Generate the webpack config we need for production
module.exports = ({ entry }) => {
  return {
    mode: 'production',
    output: {
      path: path.join(__dirname, '../build'),
      filename: `${entry.name}.js`,
    },
  }
}

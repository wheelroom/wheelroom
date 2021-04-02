const entries = require('./entries')
const webpackEntryFactory = require('./webpack-entry-factory')
const webpackProdFactory = require('./webpack-prod-factory')

module.exports = entries.map((entry) => ({
  ...webpackProdFactory({ entry }),
  ...webpackEntryFactory({ entry }),
}))

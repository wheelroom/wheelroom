const entries = require('./entries')
const webpackEntryFactory = require('./webpack-entry-factory')
const webpackDevFactory = require('./webpack-dev-factory')

module.exports = entries.map((entry) => ({
  ...webpackDevFactory({ entry }),
  ...webpackEntryFactory({ entry }),
}))

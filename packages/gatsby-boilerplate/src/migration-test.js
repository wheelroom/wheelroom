const migrationHelper = require('../plugins/gatsby-plugin-wheelroom/migration-helper/migration-helper')

migrationHelper
  .createModel({
    jsPath: 'src/page-model.js',
  })
  .then(function(result) {
    console.log('test done!')
  })

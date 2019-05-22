const migrationHelper = require('../../plugins/gatsby-plugin-wheelroom/migration-helper/migration-helper')

module.exports = function(migration, context) {
  migrationHelper.doMigration({
    migration,
    context,
    jsonPath: 'src/components/article-section.json',
  })
}

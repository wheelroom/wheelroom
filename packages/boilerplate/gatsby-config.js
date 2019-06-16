packageJson = require('./package.json')
path = require('path')

module.exports = {
  __experimentalThemes: [
    {
      options: {
        defaultLocale: 'nl',
        pageTemplate: path.resolve('./src/page-template.tsx'),
        defaultComponentResolve: `@jacco-meijer/content-models`,
        // TODO: Add local-modules resolve path
        componentTypes: {
          articleSection: {
            variations: ['Variation A', 'Variation B'],
            overwriteVariations: true,
          },
          globalsPart: {},
          articleContent: {},
          page: {},
        },
      },
      resolve: `gatsby-theme-wheelroom`,
    },
  ],
  plugins: [
    {
      options: {
        google: {
          families: ['Work+Sans:300'],
        },
      },
      resolve: 'gatsby-plugin-web-font-loader',
    },
  ],
  siteMetadata: {
    siteVersion: packageJson.version,
  },
}

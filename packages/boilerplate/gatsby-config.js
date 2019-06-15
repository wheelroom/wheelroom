packageJson = require('./package.json')
path = require('path')

module.exports = {
  __experimentalThemes: [
    {
      options: {
        defaultLocale: 'nl',
        componentTypes: [
          'articleSection',
          'globalsPart',
          'articleContent',
          'page',
        ],
        pageTemplate: path.resolve('./src/page-template.tsx'),
      },
      resolve: `gatsby-theme-wheelroom`,
    },
    // {
    //   options: {
    //     defaultLocale: 'nl',
    //     pageTemplate: path.resolve('./src/page-template.tsx'),
    //     components: [
    //       {
    //         componentTypes: ['articleSection', 'globalsPart', 'articleContent', 'page'],
    //         resolve: `gatsby-theme-wheelroom`,
    //       },
    //       {
    //         types: ['someLocalComponent'],
    //         resolve: `./src/some-component`,
    //       },
    //       {
    //         componentTypes: [
    //           {
    //             name: 'someOtherComponent',
    //             overrideVariations: ['Variation A', 'Variation B'],
    //           },
    //         ],
    //         resolve: `another-module`,
    //       },
    //     ],
    //   },
    //   resolve: `gatsby-theme-wheelroom`,
    // },
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

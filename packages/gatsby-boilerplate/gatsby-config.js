packageJson = require('./package.json')

const articleContentQuery = `
{
  articleContent: allContentfulArticleContent(
    limit: 10
  ) {
    edges {
      node {
        id
        slug
      }
    }
  }
}
`

module.exports = {
  __experimentalThemes: [
    {
      options: {
        appTheme: require('./src/theme.json'),
        defaultLocale: 'nl',
        models: {
          content: ['article'],
          parts: ['globals'],
          sections: ['article'],
        },
        // pageTemplate: path.resolve('src/page-template.tsx'),
        queries: {
          globals: {
            globalsPart: 'globalsPartQuery',
          },
          page: {
            pageQuery: 'pageQuery',
          },
          subPageContent: {
            articleContent: articleContentQuery,
          },
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

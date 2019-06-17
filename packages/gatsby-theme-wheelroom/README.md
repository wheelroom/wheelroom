# gatsby-theme-wheelroom

Site framework based on Contentful and Gatsby

## Contentful models

This theme works together with the `@jacco-meijer/wheelroom` package. The theme
provides `gatsby-node.js` and `gatsby-config.js` which take care of providing
Contentful data for configured models.

## Config

The plugin is configured like this:

```
  __experimentalThemes: [
    {
      options: {
        defaultLocale: 'nl',
        pageTemplate: path.resolve('./src/page-template.tsx'),
        defaultComponentResolve: `@jacco-meijer/content-models`,
        resolveLocalModules: 'local_modules',
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
```

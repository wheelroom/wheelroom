# gatsby-theme-wheelroom

Site framework based on Contentful and Gatsby

## Contentful models

This theme works together with the `@jacco-meijer/wheelroom` package. The theme
provides `gatsby-node.js` and `gatsby-config.js` which take care of providing
Contentful data for configured models.

Models are configured in `wheelroom-config.js`.

## Install

Install the plugin by adding it to your `gatsby-config.js`

```
  __experimentalThemes: [
    {
      options: {},
      resolve: `gatsby-theme-wheelroom`,
    },
  ],
```

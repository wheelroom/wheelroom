# gatsby-theme-wheelroom

Site framework based on Contentful, Gatsby and Wheelroom

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
      options: {
        pageTemplate: path.resolve('./src/page-template.tsx'),
      },
      resolve: `gatsby-theme-wheelroom`,
    },
  ],
```

## Types

Essentially the theme defines six basic component types. All types contain a
Contentful model. Three of the types define a graph query and a graph fragment:

- page: for retrieving and creating root pages
- subPage: for retrieving and creating subPages
- global: for retrieving globals available to all pages

The other three types do not contain a query, these types are retrieved as part
of one of the types above.

- section: defines a fragment and is retrieved as a part of a page
- part: defines a fragment and is retrieved as a part of a section
- block: no fragment and retrieved as an embedded part of a Contentful richText
  field


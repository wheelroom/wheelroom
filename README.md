# Wheelroom

Wheelroom is a command line tool for managing content models.

## Plugins

Plugins work with the managed models. Three plugins have been written:

- [wheelroom-plugin-boilerplate](https://www.npmjs.com/package/@jacco-meijer/wheelroom-plugin-boilerplate): template parser for generating typescript (React) files
- [wheelroom-plugin-graphql](https://www.npmjs.com/package/@jacco-meijer//wheelroom-plugin-graphql): template parser for generating (Gatbsyjs) graphql queries
- [wheelroom-plugin-contentful](https://www.npmjs.com/package/@jacco-meijer/wheelroom-plugin-contentful): for creating content models at Contentful

## Gatsby theme wheelroom

A generic `gatsby-node.js` built on consistent models and fragments, which takes
care of pulling wheelroom models from Contentful.

See [gatsby-theme-wheelroom](https://www.npmjs.com/package/gatsby-theme-wheelroom)

## Boilerplate

Have a look at the [boilerplate](https://github.com/jaccomeijer/wheelroom/tree/master/packages/boilerplate) so see how wheelroom and `gatsby-theme-wheelroom` work together.

## Models

Content models are defined in javascript like this.

```javascript
  /** Wheelroom field types, these are different from Contentful types */
  fieldTypes: {
    date: {
      createContentData: '2019-06-03T00:00+01:00',
      specs: {
        type: 'Date',
      },
      widgetId: 'datePicker',
    },
    dropdown: {
      specs: {
        type: 'Symbol',
      },
      widgetId: 'dropdown',
    },
    image: {
      specs: {
        linkType: 'Asset',
        type: 'Link',
        validations: [
          {
            linkMimetypeGroup: ['image'],
          },
        ],
      },
      widgetId: 'assetLinkEditor',
    },
```

Wheelroom allows for common fields and field defaults.

## Monorepo

Wheelroom is a monorepo managed by lerna.

```
npm install lerna --global
```

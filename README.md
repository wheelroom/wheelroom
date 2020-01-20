# Wheelroom

Wheelroom is a command line tool for managing content models.

## Monorepo

This is a monorepo managed by [lerna](https://www.npmjs.com/package/lerna).

```
npm install lerna --global
```

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

Have a look at the [boilerplate](https://github.com/jaccomeijer/wheelroom/tree/master/packages/boilerplate) to so see how wheelroom and `gatsby-theme-wheelroom` work together.

## Models

Content models are defined in typescript like this.

```typescript
export const configComponents: WheelroomComponents = {
  footerSection: {
    fields: {
      backgroundColor: {
        helpText: 'Select a background color',
        items: ['blue', 'orange'],
        required: true,
        type: 'dropdown',
      } as DropdownField,
      footerNavigation: {
        allowedComponents: ['navigation'],
        required: true,
        type: 'singleComponent',
      } as SingleComponentField,
    },
    modelVersion: '1.0.0',
    settings: {
      asBoilerplate: true,
      asFragment: true,
      asPageSection: true,
    },
  },
...
```

Wheelroom allows for common fields and field defaults.


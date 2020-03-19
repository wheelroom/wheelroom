# Wheelroom

Wheelroom is a command line tool for managing content models.

## Monorepo

This is a monorepo managed by [lerna](https://www.npmjs.com/package/lerna).

```
npm install lerna --global
```

## Boilerplate

Have a look at the [boilerplate](https://github.com/jaccomeijer/wheelroom/tree/master/packages/boilerplate) to so see how to use this.


## Plugins 

Plugins are used to work with the models. Three plugins have been written:

- [wheelroom-plugin-boilerplate](https://www.npmjs.com/package/@wheelroom/wheelroom-plugin-boilerplate): template parser for generating typescript (React) files
- [wheelroom-plugin-graphql](https://www.npmjs.com/package/@wheelroom//wheelroom-plugin-graphql): template parser for generating (Gatbsyjs) graphql queries
- [wheelroom-plugin-contentful](https://www.npmjs.com/package/@wheelroom/wheelroom-plugin-contentful): for creating content models at Contentful

A plugin for [prismic.io](https://prismic.io) can be easily added.


## Content models

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

## Content model fields

Wheelroom uses a [fixed set of field
types](https://github.com/jaccomeijer/wheelroom/blob/master/packages/%40jacco-meijer/wheelroom/src/types/wheelroom-fields.ts).
This is because it was designed to work with more than one headless CMS.

The actual fields that are used to create models at the CMS are defined by
passing them to the CMS plugin.

Field types can be extended by using the `typePostfix` attribute. This way, the
same Wheelroom field is able to create different content models in the CMS. The
intention is to create small variations, but there's no actual limit.


## Common fields and field defaults

Wheelroom allows for common fields and field defaults.

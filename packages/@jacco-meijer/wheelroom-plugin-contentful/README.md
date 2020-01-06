# @jacco-meijer/wheelroom-plugin-contentful

This is a plugin for the `wheelroom` package.

## Contentful API keys

The plugin uses the Contentful management API to create models and content.  For
that to work, ID's and tokens are required. The CMA token is the one written to
`~/.contentfulrc.json` when you run `contentful login` from the command line.
Beware, this token gives full access to everything in your space, so be sure
test first with an empty space and do not commit `.env` to your repository.

The `.env` looks like this:
```
CONTENTFUL_SPACE_ID=paste_here
CONTENTFUL_DELIVERY_TOKEN=paste_here
CONTENTFUL_CMA_TOKEN=paste_here
CONTENTFUL_ENVIRONMENT=master
```

## Commands

This plugin adds three commands.

To create the models at Contentful use:
```
wheelroom create-models [options]
```

To create demo entries from the `initialContent` model field, use:
```
wheelroom create-content [options]
```

Demo entries have specific ids so that they can be easily deleted:
```
wheelroom delete-content [options]
```

## Config

The plugin is configured by adding it to `wheelroom-config.js`

```javascript
module.exports = {
  components: {
      ...
  },
  plugins: [
    {
      resolve: '@jacco-meijer/wheelroom-plugin-contentful',
      options: {
        defaultLocale: 'nl',
        fieldDefinitions: contentfulFieldDefinitions,
      },
    },
  ],
}
```


### Contentful field definitions

Using typescript, Contentful field definitions are defined like this. 

```typescript
import { ContentfulFieldDefinitions } from '@jacco-meijer/wheelroom-plugin-contentful'

export const contentfulFieldDefinitions: ContentfulFieldDefinitions = {
  fieldDefaults: {
    initialContent: 'Demo content for %field name%',
    settings: {
      helpText: '%Field name% for %component name%',
    },
    specs: {
      name: '%Field name%',
      type: 'Symbol',
    },
  },
  /** Wheelroom field types, these are different from Contentful types */
  fieldTypes: {
    date: {
      initialContent: '2019-06-03T00:00+01:00',
      specs: {
        name: '%Field name%',
        type: 'Date',
      },
      widgetId: 'datePicker',
    },
    dropdown: {
      initialContent: '%firstItem%',
      specs: {
        name: '%Field name%',
        type: 'Symbol',
      },
      widgetId: 'dropdown',
    },
    image: {
      initialContent: '%demoAsset%',
      specs: {
        linkType: 'Asset',
        name: '%Field name%',
        type: 'Link',
        validations: [
          {
            linkMimetypeGroup: ['image'],
          },
        ],
      },
      widgetId: 'assetLinkEditor',
    },
...
```
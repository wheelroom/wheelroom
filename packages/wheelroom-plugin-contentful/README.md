# @wheelroom/wheelroom-plugin-contentful

This is a plugin for the [@wheelroom/wheelroom](https://www.npmjs.com/package/@wheelroom/wheelroom) package.

Have a look at the [boilerplate](https://github.com/jaccomeijer/wheelroom/tree/master/packages/boilerplate) to so see how to use this.

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

This plugin adds four commands.

### create-models

To create the models at Contentful use:
```
wheelroom create-models [options]
```

### create-content

To create demo entries from the `initialContent` model field, use:
```
wheelroom create-content [options]
```

To create entries from a content set, use:
```
wheelroom create-content [content-set] [options]
```

### delete-content

Demo entries have specific ids so that they can be easily deleted:
```
wheelroom delete-content [options]
```

### list-models

To list models that have been configured at Contentful:
```
wheelroom list-models
```

This command matches the fields returned from Contentful with the field
definitions passed to the plugin. The output is JSON that can easily be
converted into a new wheelroom component config.

### delete-models

To delete models from Contentful:
```
wheelroom delete-models
```

Note that no content for the model may exist.


## Config

The plugin is configured by adding it to `wheelroom-config.js`

```javascript
module.exports = {
  components: {
      ...
  },
  plugins: [
    {
      resolve: '@wheelroom/wheelroom-plugin-contentful',
      options: {
        fieldDefinitions: contentfulFieldDefinitions,
      },
    },
  ],
}
```


### Contentful field definitions

Using typescript, Contentful field definitions are defined like this. 

```typescript
export const contentfulFieldDefinitions: ContentfulFieldDefinitions = {
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
...
```
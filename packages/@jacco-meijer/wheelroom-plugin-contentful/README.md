# @jacco-meijer/wheelroom-plugin-contentful

This is a plugin for the `wheelroom` package.

## Model

This plugin requires a specific wheelroom component structure. It expects the
`model` key in the wheelroom component object. The model itself is defined in
[./src/types/model.ts](./src/types/model.ts)

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

This plugin adds three commands

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
wheelroom delete-content
```

## Config

The plugin is configured by adding it to `wheelroom-config.js`

```
module.exports = {
  components: {
      ...
  },
  plugins: [
    {
      resolve: '@jacco-meijer/wheelroom-plugin-contentful',
      options: {
        defaultLocale: 'nl',
      },
    },
  ],
}
```

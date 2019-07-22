# @jacco-meijer/wheelroom

Wheelroom is a command line tool that allows for storing components (any
javascript object) in npm modules and process the objects by plugins.

Say your components are data models, you could then e.g.

- generate boilerplate code from the component data or
- use the component data to initialize a headless CMS

These examples are not random, it's the two plugins that actually exist:

- wheelroom-plugin-templates
- wheelroom-plugin-contentful

## Commands

Wheelroom itself has only one command that lists the configured components.

```
wheelroom list
```

Other commands are added through plugins.

## Components

Components are resolved from the **resolve** property. The
`defaultComponentResolve` property serves as default. The resolved module is
expected to export a **component** object. The keys of the object are the
componentName. The values contain the component data.

## Plugins

Plugins define their own set of commands. Running `wheelroom --help` shows all
the configured commands available.

Plugins are resolved from the **resolve** property. The module is expected to
export a **commands** array. The items of the array are command modules for the
npm `yargs` module. See `yargs` documentation for more information.

## Config

Wheelroom is configure by defining a `wheelroom-config.js` like this:

```
module.exports = {
  defaultComponentResolve: `@jacco-meijer/content-models`,
  components: {
    article: {},
    articleSection: {
      options: {
        variations: ['var 1', 'var 2'],
        localizedFields: ['articleText'],
      },
    },
    globals: {
      resolve: '@jacco-meijer/content-models',
    },
    page: {
      resolve: `@jacco-meijer/content-models`,
      options: {
        initialPageSection: 'articleSection',
      },
    },
  },
  plugins: [
    {
      resolve: '@jacco-meijer/wheelroom-plugin-contentful',
      options: {
        defaultLocale: 'nl',
      },
    },
    {
      resolve: '@jacco-meijer/wheelroom-plugin-templates',
      options: {
        defaultTemplateResolve: `dist:templates`,
        templateSets: templateSets,
        questionSets: questionSets,
      },
    },
    {
      resolve: 'gatsby-theme-wheelroom',
      options: {
        defaultLocale: 'nl',
      },
    },
  ],
}

```

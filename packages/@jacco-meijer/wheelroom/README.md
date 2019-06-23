# @jacco-meijer/wheelroom

Opinionated site framework based on Gatsby and Contentful.

## About

### Generate component boilerplate

Wheelroom can be used to create boilerplate for a component. It's designed to
keep the final components in a Npm module for easy versioning and reuse. The
boilerplate generates code for:

- a model definition to be used with Contentful,
- a graphql query and fragment to be used with Gatbsy (`gatsby-theme-wheelroom`),
- a README.md to be used with Styleguidist and
- a React component to build your app or website with.

```
wheelroom create-files new-model src/components
```

Once the models are transpiled from typescript to ES2017 you can

### Generate Graphql fragments for Gatbsy

```
wheelroom create-files fragments src/wheelroom-fragments
```

### Create models at Contentful

```
wheelroom create-files new-model src/components
```

### Create and remove sample content at Contentful
```
wheelroom create-content
```

```
wheelroom delete-content
```

## gatsby-theme-wheelroom

This theme reads `wheelroom-config.js` and fetches all required component data.
Together with the generated fragments, components can be rendered straight away.


## Config

```
module.exports = {
  defaultLocale: 'nl',
  defaultComponentResolve: `components`,
  resolveLocalModules: 'dist',
  componentTypes: {
    articleSection: {},
    page: {
      resolve: `@jacco-meijer/content-models`,
    },
  },
}
```

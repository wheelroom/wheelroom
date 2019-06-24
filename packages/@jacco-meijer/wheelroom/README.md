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

### wheelroom-config.js
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

### .env

To know how to connect to your Contentul space, some ID's and tokens are
required. The CMA token is the one written to `~/.contentfulrc.json` when you
run `contentful login` from the command line. Beware, this token gives full
access to everything in your space, so be sure test first with an empty space
and do not commit `.env` to your repository.

```
CONTENTFUL_SPACE_ID=paste_here
CONTENTFUL_DELIVERY_TOKEN=paste_here
CONTENTFUL_CMA_TOKEN=paste_here
CONTENTFUL_ENVIRONMENT=master
```
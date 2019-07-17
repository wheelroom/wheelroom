# Wheelroom

## What it is

Wheelroom is a command line tool that allows for storing components (any
javascript object) in npm modules and process the objects by plugins.

Say your components are data models, you could then e.g.

- generate boilerplate code from the component data or
- use the component data to initialize a headless CMS

These examples are not random, it's the two plugins that actually exist:

- wheelroom-plugin-templates
- wheelroom-plugin-contentful


## Monorepo

Wheelroom is a monorepo managed by lerna.

```
npm install lerna --global
```


## Packages

### Boilerplate

See [boilerplate](./packages/boilerplate/README.md) on how to use this.

### Gatsby theme wheelroom

A generic `gatsby-node.js` built on consistent models and fragments, which takes
care of pulling data from Contentful.

See [gatsby-theme-wheelroom](./packages/gatsby-theme-wheelroom/README.md)

### Wheelroom

Wheelroom is a command line tool that allows for storing components (any
javascript object) in npm modules and process the objects by plugins.

See [@jacco-meijer/wheelroom](./packages/@jacco-meijer/wheelroom/README.md)

### Styled system

This package tries to mimic `styled-system` functionality and can be configured
to be a drop in replacement.

See [@jacco-meijer/styled-system](./packages/@jacco-meijer/styled-system/README.md)

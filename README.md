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

### [@jacco-meijer/content-models](./packages/@jacco-meijer/content-models/README.md)

Example repo containing reusable components.


### [@jacco-meijer/styled-system](./packages/@jacco-meijer/styled-system/README.md)

This package tries to mimic `styled-system` functionality and could be configured
as a drop in replacement.


### [@jacco-meijer/wheelroom](./packages/@jacco-meijer/wheelroom/README.md)

The Wheelroom command line tool.


### [boilerplate](./packages/boilerplate/README.md)

Example repo on how to use `@jacco-meijer/wheelroom` and `gatsby-theme-wheelroom`


### [gatsby-theme-wheelroom](./packages/gatsby-theme-wheelroom/README.md)

Gatsby theme that works together with `@jacco-meijer/wheelroom`. The theme
provides `gatsby-node.js` and `gatsby-config.js` which take care of providing
Contentful data for configured models.

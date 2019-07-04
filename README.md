# Wheelroom

## What it is

Wheelroom is an opinionated set of conventions that help reusing components when
working with [Gatsby](https://www.gatsbyjs.org) and
[Contentful](https://www.contentful.com).

Specifically it helps reusing:

- Contentful model definitions
- Gatsby graph queries and model fragments
- Gatsby query logic
- Generic UI components

Wheelroom contains:

- a boilerplate generator
- a tool to create and update Contentful models
- a tool to add and remove demo content for the Contentful models


## Wheelroom types

Essentially Wheelroom defines six basic component types. All types contain a
Contentful model. Three of the types define a graph query and a graph fragment:

- page: for retrieving and creating root pages
- subPage: for retrieving and creating subPages
- global: for retrieving globals available to all pages

The other three types do not contain a query, these types are retrieved as part
of one of the types above.

- section: defines a fragment and is retrieved as a part of a page
- part: defines a fragment and is retrieved as a part of a section
- block: no fragment and retrieved as an embedded part of a Contentful richText
  field


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

The Wheelroom binary.


### [boilerplate](./packages/boilerplate/README.md)

Example repo on how to use `@jacco-meijer/wheelroom` and `gatsby-theme-wheelroom`


### [gatsby-theme-wheelroom](./packages/gatsby-theme-wheelroom/README.md)

Gatsby theme that works together with `@jacco-meijer/wheelroom`. The theme
provides `gatsby-node.js` and `gatsby-config.js` which take care of providing
Contentful data for configured models.

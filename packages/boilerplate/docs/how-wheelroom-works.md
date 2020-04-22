# How Wheelroom works

## Config

Wheelroom reads the compiled version of
[wheelroom-config.ts](../src/config/wheelroom-config.ts). The models defined
here are used to:

- create content models at Contentful
- create demo content entries at Contentful
- create Graphql fragments
- create Graphql queries
- create React boilerplate code

## Gatsby

When the Gatsby development server starts, this is what happens:

- Gatsby plugin `gatsby-source-contentful` creates Graphql nodes of the
  Contentful content.
- Graphql queries defined in [gatsby-config.js](../gatsby-config.js) are fetched
  by `gatsby-theme-wheelroom`:
  ```javascript
  const globalsQuery = require('./src/models/globals/query')
  const pageQuery = require('./src/models/page/query')
  ```
- `gatsby-theme-wheelroom` plugin uses the
  [src/page-template.tsx](../src/page-template.tsx) to create page templates for
  each path.
- Page queries have `type: 'page'` defined. These entries have a `path`
  attribute.
- Graphql `ids` for page content are added to the page context of each page
  template. Eg `pageId`, `globalsId` or `articleId`.
- Once all page templates are ready, Gatsby scans the `src` folder to build a
  Graphql node. It uses the generated Graphql in the `src/models` folder. Like
  this file: [fragment.js](../src/models/page-section/fragment.js)
- The page template builds each page from sections. Sections are taken from the
  section list defined in
  [sections.tsx](../src/wheelroom/sections/sections.tsx). This boilerplate has
  one section defined. This section can be used to build a full webite because
  the page section has many variations.
- All generated page templates are rendered by applying the generated Graphql.

## Wheelroom boilerplate

The Wheelroom boilerplate uses wheels. Proper documentation has not been written. 
There is a brief overview of the [core folders](../src/wheelroom/README.md).

## Styled system

The templates use a style system:
[@wheelroom/styled-system](https://www.npmjs.com/package/@wheelroom/styled-system).
It's a simple typescript rewrite of
[styled-system.com](https://styled-system.com) and makes it fully configurable.
Styled system itself is based on [System UI Theme
Specification](https://system-ui.com/theme/).

The config file can be found here:
[styled-system-config.ts](../src/themes/yosemite/styled-system/styled-system-config.ts).
To configure the theme, look here:
[yosemite-light.ts](../src/themes/yosemite/yosemite-light.ts)

## TOC

- [Wheelroom Boilerplate Index](../README.md)
- [Getting started](./getting-started.md)
- [Deploy](./deploy-wheelroom-project.md)
- [Admin plugins](./admin-plugins.md)
- [How it works](./how-wheelroom-works.md)
- [Roadmap](./roadmap.md)

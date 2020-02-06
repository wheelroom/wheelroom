# How it works

## Config

Wheelroom reads the compiled version of
[wheelroom-config.ts](../src/config/wheelroom-config.ts). The components defined
here are used to:

- create content models at Contentful
- create demo content entries at Contentful
- create Graphql fragments
- create Graphql queries
- create React boilerplate code

## Gatsby

When the Gatsby development server starts, this is what happens:

- Gatsby plugin `gatsby-source-contentful` within
  [gatsby-theme-wheelroom](https://www.npmjs.com/package/gatsby-theme-wheelroom)
  creates Graphql nodes of the Contentful content.
- Graphql queries defined in [gatsby-config.js](../gatsby-config.js) are fetched by
  `gatsby-theme-wheelroom`:
  ```javascript
  const globalsQuery = require('./src/components/globals/query')
  const pageQuery = require('./src/components/page/query')
  ```
- `gatsby-theme-wheelroom` plugin uses the
  [src/page-template.tsx](../src/page-template.tsx) to create page templates for
  each path.
- Page queries have `type: 'page'` defined. These entries have a `path`
  attribute.
- Page queries return a `pathName` attribute to build named paths for easy site
  localization.
- Graphql `ids` for page content are added to the page context of each page
  template. Eg `pageId`, `globalsId` or `articleId`.
- Once all page templates are ready, Gatsby scans the `src` folder to build a
  Graphql node. It uses the generated Graphql in the `src/components` folder.
  Like this file:
  [src/components/opener-section/fragment.js](../src/components/opener-section/fragment.js)
- The page template builds each page from sections. Sections are taken from the
  section list defined in
  [src/sections/sections.tsx](../src/sections/sections.tsx).
- All generated page templates are rendered by applying the generated Graphql.

## Styled system

The templates use a style system: [@jacco-meijer/styled-system](https://www.npmjs.com/package/@jacco-meijer/styled-system). It's a simple typescript rewrite of [styled-system.com](https://styled-system.com) and makes it fully configurable. Styled system itself is based on [System UI Theme Specification](https://system-ui.com/theme/).

The config file can be found here: [./src/styled-system/styled-system-config.ts](../src/styled-system/styled-system-config.ts). To configure the theme, look here: [./src/styled-system/styled-system-theme.ts](../src/styled-system/styled-system-theme.ts)

## More info

- [Getting started](./getting-started.md)
- [How it works](./how-it-works.md)
- [Roadmap](./roadmap.md)

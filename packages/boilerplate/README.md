# boilerplate

Example repo on how to use
[@jacco-meijer/wheelroom](https://www.npmjs.com/package/@jacco-meijer/wheelroom)
and
[gatsby-theme-wheelroom](https://www.npmjs.com/package/gatsby-theme-wheelroom)

## Getting started

Copy the boilerplate code into a new folder and open a terminal in that folder.

### Install node modules

```bash
npm install
```

### Setup Contentful tokens

Create a new `.env` by copying the template

```bash
cp .env-template .env
```

The `CONTENTFUL_SPACE_ID` and `CONTENTFUL_DELIVERY_TOKEN` are found within the
Contentful web ui. To obtain the `CONTENTFUL_CMA_TOKEN`, you need to install the
Contentful cli:

```bash
npm install -g contentful-cli
```

```bash
contentful login
```

You don't have to paste the token back in the terminal. Just having it in `.env`
is enough.


### Default locale for Contentful

Set the `defaultLocale` option in:

- [gatsby-config.js](gatsby-config.js) for the `gatsby-theme-wheelroom` plugin
- [src/config/wheelroom/config-plugin-options.ts](./src/config/wheelroom/config-plugin-options.ts) for the
  `@jacco-meijer/wheelroom-plugin-contentful` plugin


### Compile wheelroom config

Compile the config from typescript to javascript:

```bash
npm run compile-config
```

This runs: `tsc --project src/config/tsconfig.json`. It runs the
typescript compiler with the settings in `src/config/tsconfig.ts`.


### Test config by listing all components

Wheelroom can now list the available models:

```bash
npm run wr:ls
```

This runs: `WHEELROOM_CONFIG=compiled-config/wheelroom-config.js wheelroom list`.
It sets the environment variable `WHEELROOM_CONFIG` to use the config we
compiled in the last step.


### Create Contentul models

Create the configured models in your Contentful space and check the Contentful
web ui.

```bash
npm run wr:cm
```

This runs: `WHEELROOM_CONFIG=compiled-config/wheelroom-config.js wheelroom create-models`.
It sets the config and runs the `create-models` command added by
[wheelroom-plugin-contentful](https://www.npmjs.com/package/@jacco-meijer/wheelroom-plugin-contentful).


### Create Contentful demo content

Create a dummy image asset and demo content for each model. You need to run it
twice because on the first run some references have not yet been created. To
prevent this, a future version should create the content in a smarter order.

```bash
npm run wr:cc
```

This runs: `WHEELROOM_CONFIG=compiled-config/wheelroom-config.js wheelroom create-content`.
It sets the config and runs the `create-content` command added by
[wheelroom-plugin-contentful](https://www.npmjs.com/package/@jacco-meijer/wheelroom-plugin-contentful).


### Create Graphql fragments and queries

Create the required graphql fragments and queries for Gatsby:

```bash
npm run wr:cg
```

This runs: `WHEELROOM_CONFIG=compiled-config/wheelroom-config.js wheelroom create-graphql gatsbyjs src/components`.
It sets the config and runs the `create-graphql` command added by
[wheelroom-plugin-graphql](https://www.npmjs.com/package/@jacco-meijer//wheelroom-plugin-graphql).
The `gatsbyjs` template set is written to `src/components`.


### Create React boilerplate code

Create boilerplate code for all models:

```bash
npm run wr:cb
```

This runs: `WHEELROOM_CONFIG=compiled-config/wheelroom-config.js wheelroom create-boilerplate react src/components`.
It sets the config and runs the `create-boilerplate` command added by
[wheelroom-plugin-boilerplate](https://www.npmjs.com/package/@jacco-meijer/wheelroom-plugin-boilerplate).
The `react` template set is written to `src/components`.

### Fix linting errors

Fix boilerplate imports not ordered properly:

```bash
npm run lint-fix
```

This runs: `tslint --project tsconfig.json --fix`.

### Sections

The generated react code for the sections is used in [src/sections/sections.tsx](./src/sections/sections.tsx).

### Start development server

Start Gatsby by

```bash
npm run develop
```

Open http://localhost:8000/boilerplate

### Page template

You can now edit [src/page-template.tsx](src/page-template.tsx). E.g. add
`console.log(props)` to the `PageTemplate` and inspect the `pageContext` prop.
It contains the `pageId` key used in the query in [src/page-template.tsx](src/page-template.tsx):

```graphql
  query($pageId: String, $globalsId: String) {
    site {
      siteMetadata {
        siteVersion
      }
    }
    page: contentfulPage(id: { eq: $pageId }) {
      ...Page
    }
    globals: contentfulGlobals(id: { eq: $globalsId }) {
      ...Globals
    }
  }
```

## How it works

The commands above read the compiled version of
[src/config/wheelroom-config.ts](./src/config/wheelroom-config.ts). The
components defined here are used to:

- create content models at Contentful
- create demo content entries at Contentful
- create Graphql fragments
- create Graphql queries
- create React boilerplate code

When the Gatsby development server starts, this is what happens:

- The queries defined in [gatsby-config.js](gatsby-config.js) are fetched by
  [gatsby-theme-wheelroom](https://www.npmjs.com/package/gatsby-theme-wheelroom)
- The theme is configured to use the generated Graphql queries:
  ```javascript
  const globalsQuery = require('./src/components/globals/query')
  const pageQuery = require('./src/components/page/query')
  ```
- Gatsby scans the `src` folder to build a Graphql node. It uses the generated Graphql in the
  `src/components` folder. Like this file:
  [src/components/opener-section/fragment.js](./src/components/opener-section/fragment.js)
- The `gatsby-theme-wheelroom` plugin uses the
  [src/page-template.tsx](src/page-template.tsx) to create pages for each path.
  The plugin gets the path from the entries returned by the page query. Page
  queries have `type: 'page'` defined. The entries returned by a page query must
  have a `path` attribute. The `pathName` attribute is used to build named
  paths. Named paths are useful for site localization.
- When all pages are created the `page-template.tsx` runs and loads all sections
  for the page by looking for available sections in
  [src/sections/sections.tsx](./src/sections/sections.tsx).


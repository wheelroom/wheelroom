# boilerplate

Example repo on how to use [@jacco-meijer/wheelroom](https://www.npmjs.com/package/@jacco-meijer/wheelroom) and [gatsby-theme-wheelroom](https://www.npmjs.com/package/gatsby-theme-wheelroom)

## Getting started

Copy the boilerplate code into a new folder and open a terminal in that folder.

```
npm install
```

Create a new `.env` by copying the template

```
cp .env-template .env
```

The `CONTENTFUL_SPACE_ID` and `CONTENTFUL_DELIVERY_TOKEN` are found within the
Contentful web ui. To obtain the `CONTENTFUL_CMA_TOKEN`, you need to install the Contentful cli:

```
npm install -g contentful-cli
```

```
contentful login
```

You don't have to paste the token back in the terminal. Just having it in `.env` is enough.

Set the `defaultLocale` option in:

- [gatsby-config.js](gatsby-config.js) for the `gatsby-theme-wheelroom` plugin
- [src/config/wheelroom/config-plugin-options.ts](./src/config/wheelroom/config-plugin-options.ts) for the
  `@jacco-meijer/wheelroom-plugin-contentful` plugin

Compile the config from typescript to javascript:

```
npm run compile-config
```

Wheelroom can now list the available models:

```
npm run wr:ls
```

Create the configured models in your Contentful space and check the Contentful
web ui.

```
npm run wr:cm
```

Create a dummy image asset and demo content for each model. You need to run it
twice because on the first run some references have not yet been created. To
prevent this, a future version should create the content in a smarter order.

```
npm run wr:cc
```

Create the required graphql fragments for Gatsby:

```
npm run wr:cg
```

Create boilerplate code for all models:

```
npm run wr:cb
```

Fix boilerplate imports not ordered properly:

```
npm run lint-fix
```


The generated react code for the sections is used in [src/sections/sections.tsx](./src/sections/sections.tsx).

Start Gatsby

```
npm run develop
```

Open http://localhost:8000/boilerplate


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

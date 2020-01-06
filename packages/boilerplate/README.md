# boilerplate

Example repo on how to use `@jacco-meijer/wheelroom` and `gatsby-theme-wheelroom`

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
- [wheelroom-config.js](wheelroom-config.js) for the
  `@jacco-meijer/wheelroom-plugin-contentful` plugin

Compile the config from typescript to javascript:

```
npm run compile-config
```

Wheelroom can now list the available objects:

```
npm run wr:ls
```

Create the configured models in your Contentful space and check the Contentful web ui:

```
npm run wr:cm
```

Create a dummy image asset and demo content for each model:

```
npm run wr:cc
```

Create the required GraphQL fragments for Gatsby:

```
npm run wr:cf
```

Start Gatsby and open http://localhost:8000

```
npm run develop
```

You can now edit [src/page-template.tsx](src/page-template.tsx). E.g. add
`console.log(props)` to the `PageTemplate` and inspect the `pageContext` prop.
It contains the `pageId` key used at query in `src/page-template.tsx`.

Using the `globalsId` key in the same query gives you access to the site Globals from Contentful.

To illustrate this, the query in the `page-template.tsx` can be changed into:

```graphql
  query($pageId: String, $globalsId: String) {
    site {
      siteMetadata {
        siteVersion
      }
    }
    page: contentfulPage(id: { eq: $pageId }) {
      navigationTitle
      path
      pathName
      seoDescription
      seoTitle
      sections {
        ... on Node {
          ...ArticleSection
          ...MyNewComponent
        }
      }
    }
    globals: contentfulGlobals(id: { eq: $globalsId }) {
      ...Globals
    }
  }
```

If you look at the props passed to `PageTemplate` you see the `globals` in the
`data` prop and the `articleSection` as an item in the `data.page.sections`
array.

This is because `initialPageSection` is set to `articleSection` in
`wheelroom-config.js`.


### Create graphql for components
```
npm run wr:cg
```

### Create boilerplate for components
```
npm run wr:cb
```


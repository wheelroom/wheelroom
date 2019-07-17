# boilerplate

Example repo on how to use `@jacco-meijer/wheelroom` and `gatsby-theme-wheelroom`

## Setup

Now, how to get this all running?

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

Then run:

```
contentful login
```

You don't have to paste the token back in the terminal. Just having it in `.env` is enough.

Set the `defaultLocale` option in:

- `gatsby-config.js` for the `gatsby-theme-wheelroom` plugin
- `wheelroom-config.js` for the `@jacco-meijer/wheelroom-plugin-contentful` plugin

Compile the local packages from typescript to javascript, this will make the
`dist:templates` and `dist:component-configs` resolve options work.

```
npm run build:packages
```

Wheelroom can now list the available objects:

```
npm run wr:list
```

Create the configured models in your Contentful space and check the Contentful web ui:

```
npm run wr:create-models
```

Create a dummy image asset and demo content for each model:

```
npm run wr:create-content
```

Create the required graphql fragments for Gatsby. You can overwrite the existing ones.

```
npm run wr:create-fragments
```

Start Gatsby and open http://localhost:8000

```
npm run develop
```

You can now edit `src/page-template.tsx`. E.g. add `console.log(props)` to the `PageTemplate` and inspect the
`pageContext` prop. It contains the `pageId` key used at query in `src/page-template.tsx`.

Using the `globalsId` key in the same query gives you access to the site Globals from Contentful.

You can now change the query in the `page-template.tsx` into:

```
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

Note the graphql fragments. They start with ... and refer to the fragments we
created a few steps back. The
[jaccomeijer-nl](https://github.com/jaccomeijer/jaccomeijer-nl) site contains a
full example on what is possible here.

If you look at the props passed to `PageTemplate` you see the `globals` in the
`data` prop and the `articleSection` as an item in the `data.page.sections`
array.

This is because `initialPageSection` is set to `articleSection` in the
`wheelroom-config.js`.

Finally, this is how you create new components. A component has two parts:

- a Config part that defines the Contentful model and the required graphql
- a Component part that defines the React component.

To create a new component config in `src/packages/component-configs` use:

```
npm run wr:create-new-config
```

Note that adding anything to `src/packages` requires you to run `npm run
build:packages` in order to make it available to wheelroom.

To create a new React component in `src/components` use:

```
npm run wr:create-new-component
```

Template sets are defined in `wheelroom-template-sets.js`.

Template sets config and component could be merged into one so that they share
the same set of answers.

Another alternative is:

- Generate config based on the answers
- Manually finalize the configs by setting the proper Content Types for each
  field
- Generate the component from the existing config instead of from the answers

The last approach works well once the configs are saved in a npm-module.
Starting a new project is then as simple as configuring which existing models
you need and then generate React component code from that,

Questions sets can be configured as well. They are in `wheelroom-question-sets.js`.

# Edit page template

The page template normally does not need any changes. Changes you want to make
here include:

- Adding new data to the templates
- Add SEO settings

You can edit [src/page-template.tsx](../../src/page-template.tsx). E.g. add
`console.log(props)` to the `PageTemplate` and inspect the `pageContext` prop.
It contains the `pageId` key used in the query in
[src/page-template.tsx](../../src/page-template.tsx):

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

## Next steps

- [Edit page template](./page-template.md)
- [Change default locale](./default-locale.md)
- [Add a new component](./add-new-component.md)
- [Auto fix with linter](./linter.md)

## TOC

- [Wheelroom Boilerplate Index](../../README.md)
- [Getting started](../getting-started.md)
- [Deploy](../deploy-wheelroom-project.md)
- [Admin plugins](../admin-plugins.md)
- [How it works](../how-wheelroom-works.md)
- [Roadmap](../roadmap.md)

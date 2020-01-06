# @jacco-meijer/wheelroom

Wheelroom is a command line tool for managing content models.

Plugins are used to work with the models. Three plugins have been written:

- [wheelroom-plugin-boilerplate](../wheelroom-plugin-boilerplate/README.md): template parser for generating typescript (React) files
- [wheelroom-plugin-graphql](../wheelroom-plugin-graphql/README.md): template parser for generating (Gatbsyjs) graphql queries
- [wheelroom-plugin-contentful](../wheelroom-plugin-contentful/README.md): for creating content models at Contentful

Content models are defined in javascript like this.

```javascript
article: {
  fields: {
    articleText: {
      type: 'richText',
    },
    author: {
      required: true,
    },
    createdAt: {
      system: true,
      type: 'date',
    },
  }
}
```

Wheelroom allows for common fields and field defaults.

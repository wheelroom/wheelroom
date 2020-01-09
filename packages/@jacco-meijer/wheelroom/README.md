# @jacco-meijer/wheelroom

Wheelroom is a command line tool for managing content models.

Plugins are used to work with the models. Three plugins have been written:

- [wheelroom-plugin-boilerplate](https://www.npmjs.com/package/@jacco-meijer/wheelroom-plugin-boilerplate): template parser for generating typescript (React) files
- [wheelroom-plugin-graphql](https://www.npmjs.com/package/@jacco-meijer//wheelroom-plugin-graphql): template parser for generating (Gatbsyjs) graphql queries
- [wheelroom-plugin-contentful](https://www.npmjs.com/package/@jacco-meijer/wheelroom-plugin-contentful): for creating content models at Contentful

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

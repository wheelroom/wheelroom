# Wheelroom

## History

Having developed a number of sites with Gatsby and Contenful reusing the
Contentful models seemed an obvious thing to do. First step was moving the
Contentful models and the corresponding React components into a npm module.

Next we added the Gatsby required graphql fragments. Having things all in one
place was a great step forward.

Once we stored our models and fragments in a consistent way, this allowed for a
generic `gatsby-node.js`. It would pull the data from Contentful and generate
our pages with the Gatsby API action `createPages`.

This repo contains the packages we developed on our way to a generic
`gatsby-node.js`. The final result is in the
[gatsby-theme-wheelroom](https://www.npmjs.com/package/gatsby-theme-wheelroom) package.


## Monorepo

Wheelroom is a monorepo managed by lerna.

```
npm install lerna --global
```


## Packages

### Boilerplate

See [boilerplate](https://github.com/jaccomeijer/wheelroom/tree/master/packages/boilerplate) on how to use this.

### Gatsby theme wheelroom

A generic `gatsby-node.js` built on consistent models and fragments, which takes
care of pulling data from Contentful.

See [gatsby-theme-wheelroom](https://www.npmjs.com/package/gatsby-theme-wheelroom)

### Wheelroom

Wheelroom is a command line tool for managing content models.

Plugins are used to work with the models. Three plugins have been written:

- [wheelroom-plugin-boilerplate](https://www.npmjs.com/package/@jacco-meijer/@jacco-meijer/wheelroom-plugin-boilerplate): template parser for generating typescript (React) files
- [wheelroom-plugin-graphql](https://www.npmjs.com/package/@jacco-meijer/wheelroom-plugin-graphql): template parser for generating (Gatbsyjs) graphql queries
- [wheelroom-plugin-contentful](https://www.npmjs.com/package/@jacco-meijer/wheelroom-plugin-contentful): for creating content models at Contentful

See [@jacco-meijer/wheelroom](https://www.npmjs.com/package/@jacco-meijer/wheelroom)

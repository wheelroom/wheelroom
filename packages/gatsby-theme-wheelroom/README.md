# gatsby-theme-wheelroom

A generic `gatsby-node.js` built on consistent models and fragments, which takes
care of pulling data from Contentful.

## History

Having developed a number of sites with Gatsby and Contenful reusing the
Contentful models seemed an obvious thing to do. First step was moving the
Contentful models and the corresponding React components into a npm module.

Next we added the Gatsby required Graphql fragments. Having things all in one
place was a great step forward.

Once we stored our models and fragments in a consistent way, this allowed for a
generic `gatsby-node.js`. It would pull the data from Contentful and generate
our pages with `createPages`.

This package is exactly that, a generic `gatsby-node.js` for Contentful.

## Wheelroom

Storing Contentful models and Gatbsy Graphql in a consistent way asked for
another generic solution.

Wheelroom is a npm module that allows for storing javascript objects in npm
modules and process those objects with plugins.

## Wheelroom plugins

We created two plugins

- one to create Contentful models and demo content with the contentful management api
- one to generate boilerplate content from user defined templates

## Data structure

This theme uses the wheelroom package and configuration to access our models and
fragments. So to be able to generate pages.

To make this all work, we needed to structure the data that was in our npm
modules. Besides the component objects The Wheelroom package does not define any
structure. We defined a component to be like this:

```
{
  fragment,
  model,
  query,
}
```

Where `fragment` is the Graphql fragment used by Gatsby to identify Contentful
model fields. The `model` describes the actual Contentful model. `query` tells
this plugin which entries to pull from Contentful.

The model definition is exported from the `wheelroom-plugin-contentful` package
as `Model`.

## Types

Developing the template plugin was a result of the data structure above. Working
on the template plugin we needed a way to know what parts of a component were
required.

For example, a Contentful model like a page section requires a Graphql fragment.
A Contentful block to be used within the Rich Text Editor on the other hand,
does not.

This is why we defined six component types. All of which contain a Contentful
model, but not all of them contain a query and/or a fragment.

Three of the types define a Graphql query and a Graphql fragment:

- page: for retrieving and creating root pages
- subPage: for retrieving and creating subPages
- global: for retrieving globals available to all pages

The other three types do not contain a query, these types are retrieved as part
of one of the types above.

- section: defines a fragment and is retrieved as a part of a page
- part: defines a fragment and is retrieved as a part of a section
- block: no fragment and retrieved as an embedded part of a Contentful richText
  field

| type    | model | query | fragment |
|:--      |:--    |:--    |:--       |
| page    |   x   |   x   |    x     |
| subPage |   x   |   x   |    x     |
| global  |   x   |   x   |    x     |
| section |   x   |       |    x     |
| part    |   x   |       |    x     |
| block   |   x   |       |          |

## Configuration

The components to use are configured in `wheelroom-config.js`. It simply tells
the plugin which npm module to get the components from. A module name can be
prefixed with `my/module/path:`. This will resolve the module from this path abd
makes it easy to initially develop you module from your local repository.

## Install

Install the plugin by adding it to your `gatsby-config.js`

```
  __experimentalThemes: [
    {
      options: {
        defaultLovale: 'nl',
        pageTemplate: path.resolve('./src/page-template.tsx'),
      },
      resolve: `gatsby-theme-wheelroom`,
    },
  ],
```


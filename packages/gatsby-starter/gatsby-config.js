module.exports = {
  siteMetadata: {
    siteName: `Gatsby starter`,
  },
  plugins: [
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `Contentful`,
        fieldName: `contentful`,
        url: `${process.env.GATSBY_CONTENTFUL_GRAPHQL_ENDPOINT}/spaces/${process.env.GATSBY_CONTENTFUL_SPACE_ID}`,
        headers: {
          Authorization: `Bearer ${process.env.GATSBY_CONTENTFUL_DELIVERY_TOKEN}`,
        },
      },
    },
  ],
}

const pagesQuery = `
{
  page: allContentfulPage {
    edges {
      node {
        id
        node_locale
        path
        pathName
      }
    }
  }
}
`

const partGlobalsQuery = `
{ 
  partGlobals: allContentfulPartGlobals {
    edges {
      node {
        id
        node_locale
      }
    }
  }
}
`

module.exports = {
  pagesQuery,
  partGlobalsQuery,
}

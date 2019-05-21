export const pagesQuery: string = `
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

export const partGlobalsQuery: string = `
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

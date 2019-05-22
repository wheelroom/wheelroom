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

export const globalsPartQuery: string = `
{ 
  globalsPart: allContentfulGlobalsPart {
    edges {
      node {
        id
        node_locale
      }
    }
  }
}
`

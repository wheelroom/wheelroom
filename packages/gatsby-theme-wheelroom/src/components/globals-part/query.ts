export const query = `
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

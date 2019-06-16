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
export const fragment = `
fragment GlobalsPart on ContentfulGlobalsPart {
  addressLine1
  addressLine2
  emailAddress
  heading
  siteAuthor
  siteDescription
  siteKeywords
  siteTitle
}
`

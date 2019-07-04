/**
 * Graphql definitions
 *
 * Component type: navigation
 * Wheelroom type: part
 *
 */

export const fragment = `
  fragment Navigation on ContentfulNavigation {
    routes {
      navigationTitle
      path
      pathName
    }
    variation
  }
`

export const fragmentTemplate = (fragment: string) => `${importGraphql}
${exportFragment(fragment)}
`

const importGraphql = `import { graphql } from 'gatsby'`

const exportFragment = (fragment: string) => `export const fragment = graphql\`
${fragment}\``

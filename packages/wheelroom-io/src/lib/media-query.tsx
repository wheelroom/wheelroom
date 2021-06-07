import facepaint from 'facepaint'

const breakpoints = ['37.5em', '50em', '75em']

export const mediaQuery = facepaint(
  breakpoints.map((breakPoint) => `@media (min-width: ${breakPoint})`)
)

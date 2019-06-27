import { landMarkType } from 'gatsby-theme-wheelroom'
import { NamedPaths } from 'gatsby-theme-wheelroom'

export interface SectionProps {
  /** index required for React arrays */
  key: number
  /** the landmark this section will be wrapped in */
  landMark: landMarkType
  /** the current (two characters) locale */
  locale: string
  /** an object with path names and there actual (localized) paths */
  namedPaths: NamedPaths
  /** the name of the current path */
  pathName: string
}

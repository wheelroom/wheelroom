import { landMarkType } from './landmarks'
import { NamedPaths } from './named-paths'

export interface SectionProps {
  /** Fetched by Gatsby */
  articles: any
  /** Fetched by Gatsby */
  article: any
  /** Fetched by Gatsby */
  globals: any
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

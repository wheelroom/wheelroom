import { NamedPaths } from './router'

export type landMark = 'aside' | 'footer' | 'header' | 'main'

export interface SectionProps {
  /** index required for React arrays */
  key: number
  /** the landmark this section will be wrapped in */
  landMark: landMark
  /** the current (two characters) locale */
  locale: string
  /** an object with path names and there actual (localized) paths */
  namedPaths: NamedPaths
  /** the name of the current path */
  pathName: string
}

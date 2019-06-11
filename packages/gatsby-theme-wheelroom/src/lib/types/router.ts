/** an object with path names and there actual (localized) paths */
export interface NamedPaths {
  [pathName: string]: {
    path: string
    [localeName: string]: string
  }
}

export interface TemplateToBeResolved {
  /** Custom options passed to each template */
  options: any
  /** E.g. path/to/file/README.md */
  path: string
  /** Name of the template */
  templateName: string
}

export interface Resolvers {
  [moduleName: string]: TemplateToBeResolved[]
}

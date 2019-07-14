export interface TemplateToBeResolved {
  /** Custom options passed to each template */
  options: any
  /** Name of the template */
  templateName: string
}

export interface Resolvers {
  [moduleName: string]: TemplateToBeResolved[]
}

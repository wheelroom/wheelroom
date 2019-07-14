export interface TemplateToBeResolved {
  templateName: string
}

export interface Resolvers {
  [moduleName: string]: TemplateToBeResolved[]
}

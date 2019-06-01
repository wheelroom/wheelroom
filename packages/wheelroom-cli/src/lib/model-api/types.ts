export interface Context {
  /** Contentful Management Client */
  contentfulClient?: any
  /** Contentful contentType object */
  contentType?: any
  /** Contentful editorInterface object */
  editorInterface?: any
  /** Contentful environment object */
  environment?: any
  /** Model object to be applied */
  model?: any
  /** Array of all models to be applied */
  models?: any[]
  /** List of paths model objects are read from */
  modelPaths?: string[]
  /** Contentful space object */
  space?: any
}

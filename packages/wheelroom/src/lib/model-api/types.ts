export interface Context {
  /** Contentful Management Client */
  contentfulClient?: any
  /** Contentful contentType object */
  contentType?: any
  /** Current model being applied */
  currentModel: any
  /** Contentful editorInterface object */
  editorInterface?: any
  /** Contentful environment object */
  environment?: any
  /** Array of all models to be applied */
  models?: Array<{
    /** Model object to be applied */
    model: any
    /** List of paths model objects are read from */
    modelPath: string
  }>
  /** Contentful space object */
  space?: any
}

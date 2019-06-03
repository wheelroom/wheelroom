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
  models?: ModelInfo[]
  /** Contentful space object */
  space?: any
}

export interface ModelInfo {
  /** Model object to be applied */
  model: any
  /** Name of the model */
  modelName: string
  /** List of paths model objects are read from */
  modelPath: string
  /** Package name in wich the model is defined */
  resolve: string
}

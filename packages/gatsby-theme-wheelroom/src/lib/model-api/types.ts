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
  /** Model object to be applied, read from modelPath */
  model: any
  /** Path to model definition */
  modelPath: string
  /** Name of the model */
  name: string
  /** Contentful graphql query that retrieves entries for this model */
  query: any
  /** Path to model definition */
  queryPath: string
  /** Package name in wich the model is defined */
  resolve: string
  /** Type of the model */
  type: 'page' | 'section' | 'global' | 'subPage'
}

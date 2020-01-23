export interface Content {
  fields: {
    [fieldName: string]: any
  }
  model: string
}

export interface ContentSet {
  [modelName: string]: Content
}

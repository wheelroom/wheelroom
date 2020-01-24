/** Data as defined by user */
export interface WheelroomContent {
  fields: {
    [fieldName: string]: any
  }
  model: string
}

/** Data as defined by user */
export interface WheelroomContentSet {
  [componentId: string]: WheelroomContent
}

export interface ContentfulContentField {
  initialContent: string
  type: string
}

/** Data in flat structure with field type added so that it can be sorted */
export interface ContentfulContent {
  /** Componets this model is linking to. For the best creation order */
  allowedComponents: string[]
  componentId: string
  model: string
  fields: {
    [fieldName: string]: ContentfulContentField
  }
}

/** Data in flat structure with field type added so that it can be sorted */
export type ContentfulContentSet = ContentfulContent[]

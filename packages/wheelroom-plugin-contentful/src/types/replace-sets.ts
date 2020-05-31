export interface ReplaceDetails {
  pattern: string | RegExp | number
  replacement: string | number
}

export interface ReplaceFields {
  fields: {
    [fieldId: string]: ReplaceDetails
  }
}

/** Data as defined by user */
export interface WheelroomReplaceSet {
  [model: string]: ReplaceFields
}

export interface ReplaceSets {
  [setName: string]: WheelroomReplaceSet
}

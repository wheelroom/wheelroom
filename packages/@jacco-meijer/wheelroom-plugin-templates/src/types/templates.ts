/** Passed to plugin for processing */
export interface Templates {
  [templateName: string]: Template
}

export interface Template {
  /** Template data  */
  template: any
  /** Module component was imported from */
  sourceModule: string
}

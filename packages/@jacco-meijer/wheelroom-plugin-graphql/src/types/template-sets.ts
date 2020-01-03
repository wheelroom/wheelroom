export interface TemplateSets {
  [templateSetName: string]: TemplateSet
}

export interface TemplateSet {
  [templateName: string]: TemplateDefinition
}

export interface TemplateDefinition {
  /** String literal template with %-variables */
  template: string
  /** E.g. path/to/file/README.md */
  path: string
}

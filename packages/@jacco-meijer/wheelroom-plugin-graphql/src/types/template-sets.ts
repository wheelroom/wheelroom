import { Settings } from '@jacco-meijer/wheelroom'

export type SettingsKeys = keyof Settings

export interface TemplateSets {
  [templateSetName: string]: TemplateSet
}

export interface TemplateSet {
  [templateName: string]: TemplateDefinition
}

export interface TemplateDefinition {
  /** Filter by components with a fragment or with a asQuery setting */
  filterComponentSetting: SettingsKeys
  /** String literal template with %-variables */
  template: string
  /** E.g. path/to/file/README.md */
  path: string
}

export interface TemplateConfig {
  path: string
  resolve: string
  typeFilter: string[]
}

export interface TemplateConfigs {
  [templateName: string]: TemplateConfig
}

export interface TemplateSet {
  name: string
  questions?: string
  templates: TemplateConfigs
}

export interface Options {
  defaultLocale: string
  defaultTemplateResolve: string
  templateSets: TemplateSet[]
}

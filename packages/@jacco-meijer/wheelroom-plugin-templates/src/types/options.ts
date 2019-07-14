export interface TemplateConfig {
  /** Custom options passed to each template */
  options: any
  /** E.g. path/to/file/README.md */
  path: string
  /** Node module where to resolve templates object, if prefixed with
   * 'module/location:' this path will be used instead of 'node_modules'
   */
  resolve: string
}

export interface TemplateConfigs {
  [templateName: string]: TemplateConfig
}

export interface TemplateSet {
  /** Create templates for each wheelroom component if true */
  loopComponents?: boolean
  /** Name of the set, command line parameter corresponds with this name */
  name: string
  /** If defined, passed to npm module inquirer, the answers object will be
   * passed to each template
   */
  questions?: string
  /** Which templates to use, what file to create and how to resolve them */
  templates: TemplateConfigs
}

export interface QuestionSets {
  [questionSetName: string]: any
}

export interface Options {
  defaultTemplateResolve: string
  questionSets: QuestionSets
  templateSets: TemplateSet[]
}

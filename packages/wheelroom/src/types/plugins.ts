export interface Plugin {
  /** The module that exports the commands array */
  resolve: string
  /** Plugin options */
  options: any
}

import { WheelroomComponents } from './wheelroom-components'

/** Wheelroom plugin options are defined by the plugin that uses them */
type WheelroomPluginOptions = any

/**
 * Defines the output of the wheelroom binary. This output is the input for a
 * wheelroom command. This is the argv object passed by wheelroom to a command
 * handler. Command handlers can be added by plugins.
 */
export interface WheelroomPluginArguments {
  /** Component data passed to the plugin */
  components: WheelroomComponents
  /** --filter argument value */
  filter?: string
  /** Locale string as defined in wheelroom config */
  locale: string
  /** Plugin options specific for the plugin */
  options: WheelroomPluginOptions
  /** --yes argument value */
  yes?: boolean
}

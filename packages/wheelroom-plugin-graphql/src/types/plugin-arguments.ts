import {
  WheelroomPluginOptions,
  WheelroomPluginArguments,
} from '@wheelroom/wheelroom'
import { TemplateSets } from './template-sets'

export interface PluginOptions extends WheelroomPluginOptions {
  '@wheelroom/wheelroom-plugin-graphql': {
    templateSets: TemplateSets
  }
}

export interface PluginArguments extends WheelroomPluginArguments {
  /** Plugin options specific for the plugin */
  options: PluginOptions
  /** --path argument value */
  path: string
  /** --template-set argument value */
  templateSet: string
}

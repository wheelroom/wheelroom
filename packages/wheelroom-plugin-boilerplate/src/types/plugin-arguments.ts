import {
  WheelroomPluginOptions,
  WheelroomPluginArguments,
} from '@wheelroom/wheelroom'
import { TemplateSets } from './template-sets'

export interface PluginOptions extends WheelroomPluginOptions {
  '@wheelroom/wheelroom-plugin-boilerplate': {
    templateSets: TemplateSets
  }
}

export interface PluginArguments extends WheelroomPluginArguments {
  /** --temlate-set argument value */
  templateSet: string
  /** --path argument value */
  path: string
  /** Plugin options specific for the plugin */
  options: PluginOptions
}

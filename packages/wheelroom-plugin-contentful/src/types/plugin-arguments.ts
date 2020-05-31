import {
  WheelroomPluginOptions,
  WheelroomPluginArguments,
} from '@wheelroom/wheelroom'
import { ReplaceSets } from './replace-sets'
import { ContentfulFieldDefinitions } from './contentful-field-definitions'
import { ContentSets } from './content-set'

export interface PluginOptions extends WheelroomPluginOptions {
  '@wheelroom/wheelroom-plugin-contentful': {
    contentSets?: ContentSets
    replaceSets?: ReplaceSets
    fieldDefinitions: ContentfulFieldDefinitions
  }
}

export interface PluginArguments extends WheelroomPluginArguments {
  /** --content-set argument value */
  contentSet?: string
  /** Plugin options specific for the plugin */
  options: PluginOptions
  /** --replace-set argument value */
  replaceSet?: string
}

import { WheelroomConfig } from '@wheelroom/wheelroom'
import { configCommonFields } from './wheelroom/config-common-fields'
import { models } from './wheelroom/models'
import { configFieldDefaults } from './wheelroom/config-field-defaults'
import { configPluginOptions } from './wheelroom/config-plugin-options'

export const config: WheelroomConfig = {
  commonFields: configCommonFields,
  components: models,
  fieldDefaults: configFieldDefaults,
  plugins: configPluginOptions,
}

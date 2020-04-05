import { WheelroomConfig } from '@wheelroom/wheelroom'
import { configCommonFields } from './wheelroom/common-fields'
import { models } from './wheelroom/models'
import { configFieldDefaults } from './wheelroom/field-defaults'
import { configPluginOptions } from './wheelroom/plugin-options'

export const config: WheelroomConfig = {
  commonFields: configCommonFields,
  components: models,
  fieldDefaults: configFieldDefaults,
  plugins: configPluginOptions,
}

import { WheelroomConfig } from '@wheelroom/wheelroom'
import { configCommonFields } from './src/wheelroom/config/wheelroom/common-fields'
import { models } from './src/wheelroom/config/wheelroom/models'
import { configFieldDefaults } from './src/wheelroom/config/wheelroom/field-defaults'
import { configPluginOptions } from './src/wheelroom/config/wheelroom/plugin-options'

export const config: WheelroomConfig = {
  commonFields: configCommonFields,
  components: models,
  fieldDefaults: configFieldDefaults,
  plugins: configPluginOptions,
}

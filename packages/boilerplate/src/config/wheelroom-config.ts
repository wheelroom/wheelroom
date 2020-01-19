import { configCommonFields } from './wheelroom/config-common-fields'
import { configComponents } from './wheelroom/config-components'
import { configFieldDefaults } from './wheelroom/config-field-defaults'
import { configPluginOptions } from './wheelroom/config-plugin-options'
import { CustomWheelroomConfig } from './wheelroom/custom-fields'

export const config: CustomWheelroomConfig = {
  commonFields: configCommonFields,
  components: configComponents,
  fieldDefaults: configFieldDefaults,
  plugins: configPluginOptions,
}

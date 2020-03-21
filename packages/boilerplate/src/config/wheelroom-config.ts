import { WheelroomConfig } from '@wheelroom/wheelroom'
import { configCommonFields } from './wheelroom/config-common-fields'
import { configComponents } from './wheelroom/config-components'
import { configFieldDefaults } from './wheelroom/config-field-defaults'
import { configPluginOptions } from './wheelroom/config-plugin-options'

export const config: WheelroomConfig = {
  commonFields: configCommonFields,
  components: configComponents,
  fieldDefaults: configFieldDefaults,
  plugins: configPluginOptions,
}

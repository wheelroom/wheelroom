import { WheelroomConfig } from '../types/wheelroom-config'
import { configCommonFields } from './config-common-fields'
import { configComponents } from './config-components'
import { configFieldDefaults } from './config-field-defaults'
import { configPluginOptions } from './config-plugin-options'

export const config: WheelroomConfig = {
  commonFields: configCommonFields,
  components: configComponents,
  fieldDefaults: configFieldDefaults,
  plugins: configPluginOptions,
}

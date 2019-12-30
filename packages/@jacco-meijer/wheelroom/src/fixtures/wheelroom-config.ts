import { WheelroomConfig } from '../types/wheelroom-config'
import { commonFields } from './common-fields'
import { componentsInput } from './components-input'
import { fieldDefaults } from './field-defaults'
import { pluginOptionsInput } from './plugin-options-input'

export const config: WheelroomConfig = {
  commonFields,
  components: componentsInput,
  fieldDefaults,
  plugins: pluginOptionsInput,
}

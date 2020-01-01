import { Plugin } from './plugins'
import { WheelroomComponents } from './wheelroom-components'
import { WheelroomField, WheelroomFields } from './wheelroom-fields'

export interface WheelroomConfig {
  commonFields: WheelroomFields
  components: WheelroomComponents
  fieldDefaults: WheelroomField
  plugins: Plugin[]
}

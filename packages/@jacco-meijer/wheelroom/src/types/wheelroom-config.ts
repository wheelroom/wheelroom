import { Plugin } from './plugins'
import { WheelroomComponents } from './wheelroom-components'
import { CommonField, WheelroomFields } from './wheelroom-fields'

export interface WheelroomConfig {
  commonFields: WheelroomFields
  components: WheelroomComponents
  fieldDefaults: CommonField
  plugins: Plugin[]
}

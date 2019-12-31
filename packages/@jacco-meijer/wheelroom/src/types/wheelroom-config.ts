import { Field, Fields } from './fields'
import { Plugin } from './plugins'
import { WheelroomComponents } from './wheelroom-components'

export interface WheelroomConfig {
  commonFields: Fields
  components: WheelroomComponents
  fieldDefaults: Field
  plugins: Plugin[]
}

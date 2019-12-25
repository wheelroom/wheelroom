import { Components } from './components'
import { Field, Fields } from './fields'
import { Plugin } from './plugins'

export interface WheelroomConfig {
  commonFields: Fields
  components: Components
  fieldDefaults: Field
  plugins: Plugin[]
}

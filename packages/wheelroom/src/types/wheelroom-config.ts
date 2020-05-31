import { Plugin } from './plugins'
import { WheelroomComponents } from './wheelroom-components'
import { WheelroomFields } from './wheelroom-fields'
import { CommonField, FieldType, FieldTypeName } from './wheelroom-fields'

export type FieldTypeDefaults = Record<FieldTypeName, FieldType>

export interface FieldDefaults {
  fieldTypeDefaults: FieldTypeDefaults
  commonFieldDefaults: CommonField
}

export interface WheelroomConfig {
  /** These fields are added to all components */
  commonFields: WheelroomFields
  /** Component definitions */
  components: WheelroomComponents
  /** Default values for each field type  */
  fieldDefaults: FieldDefaults
  /** Locale used for model translations and by plugins */
  locale?: string
  /** Wheelroom plugins and plungin options */
  plugins: Plugin[]
}

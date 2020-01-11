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
  commonFields: WheelroomFields
  components: WheelroomComponents
  fieldDefaults: FieldDefaults
  plugins: Plugin[]
}

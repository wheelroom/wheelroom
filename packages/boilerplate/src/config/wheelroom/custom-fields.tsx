import {
  FieldType,
  ShortTextField,
  WheelroomComponent,
  WheelroomConfig,
} from '@jacco-meijer/wheelroom'

/** Add new field ShortTextCamelCaseField */
export interface ShortTextCamelCaseField extends Omit<ShortTextField, 'type'> {
  type: 'shortTextCamelCase'
}

/** Add new field ShortTextPathField */
export interface ShortTextPathField extends Omit<ShortTextField, 'type'> {
  type: 'shortTextPath'
}

/** Allow fields below to use custom fields */
interface CustomWheelroomComponent extends Omit<WheelroomComponent, 'fields'> {
  fields: {
    [fieldName: string]:
      | FieldType
      | ShortTextCamelCaseField
      | ShortTextPathField
  }
}

/** Use CustomWheelroomComponent instead of WheelroomComponent */
export interface CustomWheelroomComponents {
  [componentName: string]: CustomWheelroomComponent
}

/** Use CustomWheelroomComponents in config */
export interface CustomWheelroomConfig
  extends Omit<WheelroomConfig, 'components'> {
  components: CustomWheelroomComponents
}

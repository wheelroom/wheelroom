import {
  FieldType,
  FieldTypeName,
  MultipleComponentsField,
  SingleComponentField,
} from '@wheelroom/wheelroom'

type TypeTable = Record<FieldTypeName, string>

export const getPropValue = (fieldName: string, field: FieldType) => {
  const wheelroomTypeToTsType: TypeTable = {
    checkbox: `{props.${fieldName}}`,
    date: `{props.${fieldName}}`,
    dropdown: `{props.${fieldName}}`,
    image: `<Image image={props.${fieldName}} {...imageProps} />`,
    longText: `{props.${fieldName} ? props.${fieldName}.${fieldName} : 'null'}`,
    multipleComponents: (field as MultipleComponentsField).allowedComponents
      ? (field as MultipleComponentsField).allowedComponents.join(', ')
      : 'allowedComponents not defined',

    number: `{props.${fieldName}}`,
    richText: `{props.${fieldName} ? props.${fieldName}.${fieldName} : 'null'}`,
    shortText: `{props.${fieldName}}`,
    singleComponent: (field as SingleComponentField).allowedComponents
      ? (field as SingleComponentField).allowedComponents.join(', ')
      : 'allowedComponents not defined',
    tags: `{props.${fieldName}}`,
  }

  return wheelroomTypeToTsType[field.type]
}

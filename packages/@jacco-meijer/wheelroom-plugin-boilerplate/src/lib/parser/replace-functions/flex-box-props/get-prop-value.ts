import { FieldType, FieldTypeName } from '@jacco-meijer/wheelroom'

type TypeTable = Record<FieldTypeName, string>

export const getPropValue = (fieldName: string, field: FieldType) => {
  const wheelroomTypeToTsType: TypeTable = {
    date: `{props.${fieldName}}`,
    dropdown: `{props.${fieldName}}`,
    image: `<Image image={props.${fieldName}} {...imageProps} />`,
    longText: `{props.${fieldName}.${fieldName}}`,
    multipleComponents: `{props.${fieldName}}`,
    number: `{props.${fieldName}}`,
    richText: `{props.${fieldName}.${fieldName}}`,
    shortText: `{props.${fieldName}}`,
    singleComponent: `{props.${fieldName}}`,
    tags: `{props.${fieldName}}`,
  }

  return wheelroomTypeToTsType[field.type]
}

import {
  FieldType,
  FieldTypeName,
  parser,
  WheelroomComponent,
} from '@jacco-meijer/wheelroom'

type TypeTable = Record<FieldTypeName, string>

const wheelroomTypeToTsType: TypeTable = {
  date: 'string',
  dropdown: 'string',
  image: 'FluidImage',
  longText: `{\n    %fieldName%: string\n  }`,
  multipleComponents: 'any',
  number: 'number',
  richText: `{\n    %fieldName%: string\n  }`,
  shortText: 'string',
  singleComponent: 'any',
  tags: 'string[]',
}

interface ParseReactProps {
  component: WheelroomComponent
  componentName: string
  params: {
    [name: string]: string
  }
}

export const parseReactProps = (context: ParseReactProps): string => {
  const indentLevel = context.params.indent
    ? parseInt(context.params.indent, 10)
    : 0
  const indentString = Array(indentLevel + 1).join(' ')
  const reactProps = Object.entries(context.component.fields)
    .map(([fieldName, field]: [string, FieldType]) => {
      // const fName = getCases(fieldName)
      const wheelroomType = field.type || 'shortText'
      const typescriptType = parser(wheelroomTypeToTsType[wheelroomType], {
        componentName: context.componentName,
        fieldName,
      })
      return `${indentString}${fieldName}: ${typescriptType}`
    })
    .join('\n')
  return reactProps
}

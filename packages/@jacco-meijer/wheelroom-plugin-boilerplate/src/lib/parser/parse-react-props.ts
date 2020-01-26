import {
  createParser,
  FieldType,
  FieldTypeName,
  replaceFunctions,
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
  skipFields?: string[]
}

export const parseReactProps = (context: ParseReactProps): string => {
  const indentLevel = context.params.indent
    ? parseInt(context.params.indent, 10)
    : 0
  const indentString = Array(indentLevel + 1).join(' ')
  const reactProps = Object.entries(context.component.fields)
    .filter(([fieldName, field]: [string, FieldType]) => {
      if (Array.isArray(context.skipFields)) {
        return context.skipFields.includes(fieldName) ? false : true
      } else {
        // If no filter present, include all
        return true
      }
    })
    .map(([fieldName, field]: [string, FieldType]) => {
      const parser = createParser({
        componentName: context.componentName,
        fieldName,
      })
      parser.addReplaceFunctions(replaceFunctions)
      const wheelroomType = field.type || 'shortText'
      const typescriptType = parser.parse(wheelroomTypeToTsType[wheelroomType])
      return `${indentString}${fieldName}: ${typescriptType}`
    })
    .join('\n')
  return reactProps
}

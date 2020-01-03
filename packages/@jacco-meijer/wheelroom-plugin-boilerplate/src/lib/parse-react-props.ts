import {
  getCases,
  parser,
  WheelroomComponent,
  WheelroomField,
} from '@jacco-meijer/wheelroom'

const wheelroomTypeToTsType = {
  date: 'string',
  dropdown: 'string',
  image: 'FluidImage',
  multipleComponents: 'any',
  number: 'number',
  richText: `{\n    %fieldName%: string\n  }`,
  shortText: 'string',
  tags: 'string[]',
}

interface ParseReactProps {
  component: WheelroomComponent
  componentName: string
  argName: string
  argValue: string
}

export const parseReactProps = (context: ParseReactProps): string => {
  let indentLevel = 0
  if (context.argName === 'indent') {
    indentLevel = parseInt(context.argValue, 10)
  }
  const indentString = Array(indentLevel + 1).join(' ')
  const reactProps = Object.entries(context.component.fields)
    .map(([fieldName, field]: [string, WheelroomField]) => {
      const fName = getCases(fieldName)
      const wheelroomType = field.type || 'shortText'
      const typescriptType = parser({
        componentName: context.componentName,
        fieldName,
        unparsed: wheelroomTypeToTsType[wheelroomType],
      })
      return `${indentString}${fName.camelCase}: ${typescriptType}`
    })
    .join('\n')
  return reactProps
}

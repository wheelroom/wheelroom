/**
 * Parse these variables:
 *
 * - %variationList(indent:2)%
 * - %reactProps(indent:2)%
 *
 */

// TODO: Parse indent variable

import {
  getCases,
  parser,
  replaceAll,
  WheelroomComponent,
  WheelroomField,
} from '@jacco-meijer/wheelroom'

export const templateParser = ({
  componentName,
  component,
  unparsed,
}: {
  componentName: string
  component: WheelroomComponent
  unparsed: string
}): string => {
  let parsed = unparsed

  const compName = getCases(componentName)

  // Check for a 'variation' field
  if (
    'variation' in component.fields &&
    'items' in component.fields.variation
  ) {
    const items = component.fields.variation.items
    const variationList = items!
      .map((item: string) => `  ['${item}']: ${compName.pascalCase}BasicVar,`)
      .join(`\n`)
    parsed = replaceAll(parsed, '%variationList(indent:2)%', variationList)
  }

  const wheelroomTypeToTsType = {
    date: 'string',
    dropdown: 'string[]',
    image: 'FluidImage',
    multipleComponents: 'any',
    number: 'number',
    richText: `{\n    %fieldName%: string\n  }`,
    shortText: 'string',
    tags: 'string[]',
  }

  let reactProps = ''
  Object.entries(component.fields).forEach(
    ([fieldName, field]: [string, WheelroomField]) => {
      const fName = getCases(fieldName)
      const wheelroomType = field.type || 'shortText'
      const typescriptType = parser({
        componentName,
        fieldName,
        unparsed: wheelroomTypeToTsType[wheelroomType],
      })
      reactProps += `  ${fName.camelCase}: ${typescriptType}\n`
    }
  )
  parsed = replaceAll(parsed, '%reactProps(indent:2)%', reactProps)

  return parsed as string
}

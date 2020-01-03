import { getCases, WheelroomComponent } from '@jacco-meijer/wheelroom'
import { singleVariationName } from './template-parser'

interface ParseVariation {
  component: WheelroomComponent
  componentName: string
  argName: string
  argValue: string
}

export const parseVariation = (context: ParseVariation) => {
  let indentLevel = 0
  if (context.argName === 'indent') {
    indentLevel = parseInt(context.argValue, 10)
  }
  const indentString = Array(indentLevel + 1).join(' ')
  const compName = getCases(context.componentName)

  let variationList = ''
  let items: string[]
  // Check for a 'variation' field
  if (
    'variation' in context.component.fields &&
    'items' in context.component.fields.variation
  ) {
    items = context.component.fields.variation.items!
  } else {
    items = [singleVariationName]
  }

  variationList = items
    .map(
      (item: string) =>
        `${indentString}['${item}']: ${compName.pascalCase}${
          getCases(item).pascalCase
        }Var,`
    )
    .join(`\n`)

  return variationList
}

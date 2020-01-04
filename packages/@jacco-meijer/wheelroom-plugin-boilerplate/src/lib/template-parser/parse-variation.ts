import { getCases, WheelroomComponent } from '@jacco-meijer/wheelroom'

interface ParseVariation {
  argName: string
  argValue: string
  component: WheelroomComponent
  componentName: string
  singleVariationName: string
}

export const parseVariation = (context: ParseVariation) => {
  let indentLevel = 0
  if (context.argName === 'indent') {
    indentLevel = parseInt(context.argValue, 10)
  }
  const indentString = Array(indentLevel + 1).join(' ')
  const cnCase = getCases(context.componentName)

  let variationList = ''
  let items: string[]

  if (
    'variation' in context.component.fields &&
    'items' in context.component.fields.variation
  ) {
    items = context.component.fields.variation.items!
  } else {
    items = [context.singleVariationName]
  }

  variationList = items
    .map(
      (item: string) =>
        `${indentString}['${item}']: ${cnCase.pascalCase}${
          getCases(item).pascalCase
        }Var,`
    )
    .join(`\n`)

  return variationList
}

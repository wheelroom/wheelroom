import { getCases, WheelroomComponent } from '@wheelroom/wheelroom'

interface ParseVariation {
  params: {
    [name: string]: string
  }
  component: WheelroomComponent
  componentName: string
  singleVariationName: string
}

export const parseVariation = (context: ParseVariation) => {
  const indentLevel = context.params.indent
    ? parseInt(context.params.indent, 10)
    : 0
  const indentString = Array(indentLevel + 1).join(' ')
  const cnCase = getCases(context.componentName)

  let variationList = ''
  let items: string[]

  if (
    'variation' in context.component.fields &&
    'items' in context.component.fields.variation &&
    context.component.fields.variation.type === 'dropdown'
  ) {
    items = context.component.fields.variation.items
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

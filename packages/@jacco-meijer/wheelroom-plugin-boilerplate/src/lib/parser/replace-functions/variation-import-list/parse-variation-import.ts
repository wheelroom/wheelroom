import { getCases, WheelroomComponent } from '@jacco-meijer/wheelroom'

interface ParseVariationImport {
  component: WheelroomComponent
  componentName: string
  singleVariationName: string
}

export const parseVariationImport = (context: ParseVariationImport) => {
  const cnCase = getCases(context.componentName)

  let variationList = ''
  let items: string[]
  // Check for a 'variation' field
  if (
    'variation' in context.component.fields &&
    'items' in context.component.fields.variation
  ) {
    items = context.component.fields.variation.items!
  } else {
    items = [context.singleVariationName]
  }

  variationList = items
    .map((item: string) => {
      const iCase = getCases(item)
      return `import { ${cnCase.pascalCase}${iCase.pascalCase}Var } from './${cnCase.kebabCase}-${iCase.kebabCase}-var'`
    })
    .join(`\n`)

  return variationList
}

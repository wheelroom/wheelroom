import { modelFields } from '../helpers/model-fields'
import { Vars } from '../types/vars'

export const component = (vars: Vars) => {
  // Skip this template if not present in filter array
  if (
    !vars.options.filter.includes(vars.component.component.model.wheelroomType)
  ) {
    return
  }

  const fields = modelFields(vars.component.component.model)
  const componentProps = fields
    .sort()
    .map(
      (fieldName: string) => `  ${fieldName}: string
`
    )
    .join('')

  return `/**
 * Component
 *
 * Component type: ${vars.componentName.camelCase}
 * Wheelroom type: ${vars.component.component.model.wheelroomType}
 *
 */

import { components } from '@jacco-meijer/content-models'
import * as React from 'react'
import { getVariation } from '../get-variation'
import { SectionProps } from '../section-props'
import { ${vars.componentName.pascalCase}BasicVar } from './${vars.componentName.dashCase}-basic-var'

const componentList = [${vars.componentName.pascalCase}BasicVar]

export interface ${vars.componentName.pascalCase}Props extends SectionProps {
  /** Gatsby fetched data */
${componentProps}}

export const ${vars.componentName.pascalCase} = (props: ${vars.componentName.pascalCase}Props) => {
  const Variation = getVariation(
    props,
    components.${vars.componentName.camelCase}.variations,
    componentList
  )

  return <Variation {...props} />
}
`
}

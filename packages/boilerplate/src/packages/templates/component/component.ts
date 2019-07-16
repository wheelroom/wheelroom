export const component = (vars: any) => `/**
 * Component
 *
 * Component type: ${vars.componentType}
 * Wheelroom type: ${vars.wheelroomType}
 *
 */

import { componentsMap } from '@jacco-meijer/content-models'
import * as React from 'react'
import { getVariation } from '../get-variation'
import { SectionProps } from '../section-props'
import { ${vars.componentClassName}BasicVar } from './${vars.componentFileName}-basic-var'

const componentList = [${vars.componentClassName}BasicVar]

export interface ${vars.componentClassName}Props extends SectionProps {
  /** Gatsby fetched data */
${vars.componentProps}}

export const ${vars.componentClassName} = (props: ${vars.componentClassName}Props) => {
  const Variation = getVariation(
    props,
    componentsMap.${vars.componentType}.variations,
    componentList
  )

  return <Variation {...props} />
}
`

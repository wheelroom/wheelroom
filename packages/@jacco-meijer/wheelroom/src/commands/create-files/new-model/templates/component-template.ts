export const componentTemplate = (
  componentProps: string,
  componentClassName: string,
  componentType: string,
  wheelroomType: string
) => `/**
 * Component
 *
 * Component type: ${componentType}
 * Wheelroom type: ${wheelroomType}
 *
 */

import * as React from 'react'
import { getVariation } from '../get-variation'
import { SectionProps } from '../section-props'
import { variations } from './variations'

export interface ${componentClassName}Props extends SectionProps {
  /** Gatsby fetched data */
${componentProps}}

export const ${componentClassName} = (props: ${componentClassName}Props) => {
  const Variation = getVariation(props, variations)

  return <Variation {...props} />
}
`

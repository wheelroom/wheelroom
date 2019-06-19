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

import { getVariation } from '@jacco-meijer/wheelroom'
import * as React from 'react'
import { variations } from './variations'

export interface ${componentClassName}Props {
  /** Gatsby fetched data */
${componentProps}
}

export const ${componentClassName} = (props: ${componentClassName}Props) => {
  const Variation = getVariation(props, variations)

  return <Variation {...props} />
}
`

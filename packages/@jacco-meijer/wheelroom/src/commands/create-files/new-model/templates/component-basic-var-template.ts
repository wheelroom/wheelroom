export const componentBasicVarTemplate = (
  componentFileName: string,
  componentClassName: string,
  componentType: string,
  wheelroomType: string
) => `/**
 * Component variation
 *
 * Component type: ${componentType}
 * Wheelroom type: ${wheelroomType}
 * Variation: basic
 *
 */

import * as React from 'react'

import { ${componentClassName}Props } from './${componentFileName}'

export const ${componentClassName}BasicVar = (props: ${componentClassName}Props) => {
  return (
    <div>
      <h2>${componentClassName}Basic</h2>
      <p>Hello world</p>
    </div>
  )
}
`

import {Vars } from '../../../create-new-model'

export const componentBasicVarTemplate = (vars: Vars) => `/**
 * Component variation
 *
 * Component type: ${vars.componentType}
 * Wheelroom type: ${vars.wheelroomType}
 * Variation: basic
 *
 */

import * as React from 'react'

import { ${vars.componentClassName}Props } from './${vars.componentFileName}'

export const ${vars.componentClassName}BasicVar = (props: ${vars.componentClassName}Props) => {
  return (
    <div>
      <h2>${vars.componentClassName}Basic</h2>
      <p>Hello world</p>
    </div>
  )
}
`

/**
 * Component variation
 *
 * Component type: myNewComponent
 * Wheelroom type: subPage
 * Variation: basic
 *
 */

import * as React from 'react'

import { MyNewComponentProps } from './my-new-component'

export const MyNewComponentBasicVar = (props: MyNewComponentProps) => {
  return (
    <div>
      <h2>MyNewComponentBasic</h2>
      <p>Hello world</p>
    </div>
  )
}

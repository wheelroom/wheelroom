/**
 * Component
 *
 * Component type: myNewComponent
 * Wheelroom type: subPage
 *
 */

import { getVariation } from '@jacco-meijer/content-models'
import * as React from 'react'
import { variations } from './variations'

export interface MyNewComponentProps {
  /** Gatsby fetched data */
  author: string
  bodyText: string
  heading: string
  variation: string

}

export const MyNewComponent = (props: MyNewComponentProps) => {
  const Variation = getVariation(props, variations)

  return <Variation {...props} />
}

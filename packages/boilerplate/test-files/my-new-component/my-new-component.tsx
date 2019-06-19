import { getVariation } from '@jacco-meijer/wheelroom'
import * as React from 'react'
import { variations } from './variations'

export interface MyNewComponentProps {
  /** Gatsby fetched data */
  author: string
  bodyText: string
  heading: string

}

export const MyNewComponent = (props: MyNewComponentProps) => {
  const Variation = getVariation(props, variations)

  return <Variation {...props} />
}

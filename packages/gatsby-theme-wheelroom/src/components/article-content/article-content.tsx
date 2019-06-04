import * as React from 'react'
import { getVariation } from '../../lib/variations/variations'
import { variations } from './variations'

export interface ArticleContentProps {
  /** Description of prop "name" */
  name: string
  /** Description of prop "about" */
  about: string
  /** Description of prop "variation" */
  variation: string
}

export const ArticleContent = (props: ArticleContentProps) => {
  const Variation = getVariation(props, variations)

  return <Variation {...props} />
}

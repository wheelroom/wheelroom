import * as React from 'react'
import { getVariation } from '../../lib/variations/variations'
import { variations } from './variations'

export interface ArticleContentProps {
  /** Gatsby fetched data */
  data: any
}

export const ArticleContent = (props: ArticleContentProps) => {
  const Variation = getVariation(props, variations)

  return <Variation {...props} />
}

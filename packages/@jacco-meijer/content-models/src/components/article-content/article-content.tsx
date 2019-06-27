import * as React from 'react'
import { getVariation } from '../get-variation'
import { variations } from './variations'

export interface ArticleContentProps {
  /** Gatsby fetched data */
  data: any
}

export const ArticleContent = (props: ArticleContentProps) => {
  const Variation = getVariation(props, variations)

  return <Variation {...props} />
}

import * as React from 'react'
import { getVariation } from '../../lib/variations/variations'
import { variations } from './variations'

export interface ArticleContentProps {
  /** Gatsby fetched data */
  data: any
}

export const ArticleContent = ({ data }: ArticleContentProps) => {
  const Variation = getVariation(data.variation, variations)

  return <Variation {...data} />
}

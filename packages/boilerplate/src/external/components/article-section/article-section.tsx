/**
 * Component
 *
 * Component type: articleSection
 * Wheelroom type: section
 *
 */

import { getVariation } from '@jacco-meijer/content-models'
import * as React from 'react'
import { variations } from './variations'

export interface ArticleSectionProps {
  /** Gatsby fetched data */
  author: string
  bodyText: string
  heading: string
  variation: string

}

export const ArticleSection = (props: ArticleSectionProps) => {
  const Variation = getVariation(props, variations)

  return <Variation {...props} />
}

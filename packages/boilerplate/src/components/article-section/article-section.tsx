/**
 * Component
 *
 * Component type: articleSection
 * Wheelroom type: section
 *
 */

import { getVariation } from '@jacco-meijer/wheelroom'
import * as React from 'react'
import { variations } from './variations'

export interface ArticleSectionProps {
  /** Gatsby fetched data */
  articleText: string
  variation: string

}

export const ArticleSection = (props: ArticleSectionProps) => {
  const Variation = getVariation(props, variations)

  return <Variation {...props} />
}

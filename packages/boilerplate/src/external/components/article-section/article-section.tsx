/**
 * Component
 *
 * Component type: articleSection
 * Wheelroom type: section
 *
 */

import * as React from 'react'
import { getVariation } from '../get-variation'
import { SectionProps } from '../section-props'
import { variations } from './variations'

export interface ArticleSectionProps extends SectionProps {
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

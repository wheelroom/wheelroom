/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Headline
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../core/lib/not-implemented'
import { getPageSectionInfo } from '../../core/lib/get-page-section-info'
import { HeadlineDisplay } from '../../core/page-section-views/headline-display'
import { headlineDisplayStyleTree } from '../../styles/style-trees/headline-display-style-tree'

export const PageSectionHeadlineVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)
  if (pageSectionInfo.hasTopic) {
    return (
      <HeadlineDisplay
        pageSection={props}
        styleTree={headlineDisplayStyleTree}
      />
    )
  }

  /** If you did not return a view above, Wheelroom will display this notification */
  return <NotImplemented {...props} />
}

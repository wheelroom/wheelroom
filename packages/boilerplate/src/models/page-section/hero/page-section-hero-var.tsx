/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Hero
 *
 */

import React from 'react'
import { PageSectionProps } from '../page-section'
import { NotImplemented } from '../../../core/lib/not-implemented'
import { getPageSectionInfo } from '../../../core/lib/get-page-section-info'
import { HeroTree } from '../../../core/trees/page-section/hero-tree'
import { heroTreeStyle } from './hero-tree-style'

export const PageSectionHeroVar = (props: PageSectionProps) => {
  const pageSectionInfo = getPageSectionInfo(props)
  if (pageSectionInfo.hasTopic) {
    return <HeroTree pageSection={props} treeStyle={heroTreeStyle} />
  }

  /**
   * If you did not return a view above, Wheelroom will display this
   * notification
   */
  return <NotImplemented {...props} />
}

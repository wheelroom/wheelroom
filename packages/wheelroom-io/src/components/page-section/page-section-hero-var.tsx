/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Hero
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../lib/not-implemented'
import { getPageSectionInfo } from '../../lib/get-page-section-info'
import { Hero } from './hero/hero'

export const PageSectionHeroVar = (props: PageSectionProps) => {
  const info = getPageSectionInfo(props)
  if (info.hasTopic) {
    return (
      <Hero
        topic={props.topics[0]}
        text={{ ...props.text, locale: props.locale }}
        topicOptions={props.topicOptions}
      />
    )
  }

  /**
   * If you did not return a view above, Wheelroom will display this
   * notification
   */
  return <NotImplemented {...props} />
}

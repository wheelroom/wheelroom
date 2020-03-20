/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Featured
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../lib/not-implemented'
import { getPageSectionInfo } from '../../lib/get-page-section-info'
import { Featured } from './featured/featured'
import { FeaturedMultipleTopics } from './featured/featured-multiple-topics'

export const PageSectionFeaturedVar = (props: PageSectionProps) => {
  const info = getPageSectionInfo(props)
  if (info.topicCount === 1) {
    return (
      <Featured
        info={info}
        topic={props.topics[0]}
        text={{ ...props.text, locale: props.locale }}
        topicOptions={props.topicOptions}
      />
    )
  }
  if (info.topicCount <= 4) {
    return (
      <FeaturedMultipleTopics
        info={info}
        topics={props.topics}
        topicOptions={props.topicOptions}
      />
    )
  }

  /** If you did not return a view above, Wheelroom will display this notification */
  return <NotImplemented {...props} />
}

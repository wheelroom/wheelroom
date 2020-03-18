/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Headline
 *
 */

import React from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../lib/not-implemented'
import { getPageSectionInfo } from '../../lib/get-page-section-info'
import { Headline } from './headline/headline'

export const PageSectionHeadlineVar = (props: PageSectionProps) => {
  const info = getPageSectionInfo(props)
  if (info.hasTopic || info.hasText) {
    const topic = info.hasTopic ? props.topics[0] : undefined
    return (
      <Headline
        info={info}
        topic={topic}
        text={{ ...props.text, locale: props.locale }}
        topicOptions={props.topicOptions}
      />
    )
  }

  /** If you did not return a view above, Wheelroom will display this notification */
  return <NotImplemented {...props} />
}

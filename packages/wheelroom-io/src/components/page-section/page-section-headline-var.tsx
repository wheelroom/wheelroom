/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Headline
 *
 */

import React, { Fragment } from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../lib/not-implemented'
import { getPageSectionInfo } from '../../lib/get-page-section-info'
import { Text } from '../text/text'
import { Headline } from './headline/headline'

export const PageSectionHeadlineVar = (props: PageSectionProps) => {
  const info = getPageSectionInfo(props)
  if (info.hasTopic && info.hasText) {
    return (
      <Fragment>
        <Headline topic={props.topics[0]} />
        <Text {...props.text} locale={props.locale} />
      </Fragment>
    )
  }
  if (info.hasTopic) {
    return <Headline topic={props.topics[0]} />
  }
  if (info.hasText) {
    return <Text {...props.text} locale={props.locale} />
  }
  /** If you did not return a view above, Wheelroom will display this notification */
  return <NotImplemented {...props} />
}
/**
 * Component variation
 *
 * Component type: pageSection
 * Variation: Featured
 *
 */

import React, { Fragment } from 'react'
import { PageSectionProps } from './page-section'
import { NotImplemented } from '../../lib/not-implemented'
import { getPageSectionInfo } from '../../lib/get-page-section-info'
import { Text } from '../text'
import { Featured } from './featured/featured'

export const PageSectionFeaturedVar = (props: PageSectionProps) => {
  const info = getPageSectionInfo(props)
  if (info.hasTopic && info.hasText) {
    return (
      <Fragment>
        <Featured topics={props.topics} />
        <Text {...props.text} locale={props.locale} />
      </Fragment>
    )
  }
  if (info.hasTopic) {
    return <Featured topics={props.topics} />
  }
  if (info.hasText) {
    return <Text {...props.text} locale={props.locale} />
  }
  /** If you did not return a view above, Wheelroom will display this notification */
  return <NotImplemented {...props} />
}

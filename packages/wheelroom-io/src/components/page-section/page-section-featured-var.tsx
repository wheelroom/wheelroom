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

export const PageSectionFeaturedVar = (props: PageSectionProps) => {
  const info = getPageSectionInfo(props)
  if (info.hasTopic) {
    return (
      <Featured
        info={info}
        topics={props.topics}
        text={props.text}
        locale={props.locale}
      />
    )
  }

  /** If you did not return a view above, Wheelroom will display this notification */
  return <NotImplemented {...props} />
}

import React from 'react'
import { PageSectionProps } from '../page-section'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'

export const ImageDisplay = (props: { pageSection: PageSectionProps }) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  return <div>ImageDisplay</div>
}

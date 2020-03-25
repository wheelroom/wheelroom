import React from 'react'
import { PageSectionProps } from '../page-section'
import { getPageSectionInfo } from '../../../lib/get-page-section-info'

export const QuoteDisplay = (props: { pageSection: PageSectionProps }) => {
  const pageSectionInfo = getPageSectionInfo(props.pageSection)
  return <div>QuoteDisplay</div>
}

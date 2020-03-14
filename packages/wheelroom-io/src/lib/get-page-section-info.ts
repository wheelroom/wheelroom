import { PageSectionProps } from '../components/page-section/page-section'

export interface PageSectionInfo {
  actionCount: number
  hasAction: boolean
  hasNavigation: boolean
  hasText: boolean
  hasTopic: boolean
  index: number
  navigationSegmentCount: number
  topicCount: number
  variation: string
}

export const getPageSectionInfo = (pageSection: PageSectionProps) => {
  const info = {
    actionCount: 0,
    hasAction: false,
    hasNavigation: false,
    hasText: false,
    hasTopic: false,
    index: pageSection.index,
    navigationSegmentCount: 0,
    path: pageSection.page.path,
    topicCount: 0,
    variation: pageSection.variation,
  }
  if (pageSection.actions && Array.isArray(pageSection.actions)) {
    info.hasAction = true
    info.actionCount = pageSection.actions.length
  }
  if (pageSection.topics && Array.isArray(pageSection.topics)) {
    info.hasTopic = true
    info.topicCount = pageSection.topics.length
  }
  if (pageSection.text) {
    info.hasText = true
  }
  if (
    pageSection.navigation &&
    Array.isArray(pageSection.navigation.segments)
  ) {
    info.hasNavigation = true
    info.navigationSegmentCount = pageSection.navigation.segments.length
  }
  return info
}

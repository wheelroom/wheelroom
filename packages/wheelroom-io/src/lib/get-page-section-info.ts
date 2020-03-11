import { PageSectionProps } from '../components/page-section/page-section'

export interface PageSectionInfo {
  hasAction: boolean
  actionCount: number
  hasNavigation: boolean
  navigationSegmentCount: number
  hasText: boolean
  hasTopic: boolean
  topicCount: number
  variation: string
}

export const getPageSectionInfo = (pageSection: PageSectionProps) => {
  const info = {
    hasAction: false,
    actionCount: 0,
    hasNavigation: false,
    navigationSegmentCount: 0,
    hasText: false,
    hasTopic: false,
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

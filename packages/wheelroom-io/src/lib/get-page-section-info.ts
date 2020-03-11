import { PageSectionProps } from '../components/page-section/page-section'

export interface PageSectionInfo {
  hasNavigation: boolean
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
  if (pageSection.navigation) {
    info.hasNavigation = true
  }
  return info
}

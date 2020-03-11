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
    hasNavigation: false,
    hasText: false,
    hasTopic: false,
    topicCount: 0,
    variation: '',
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

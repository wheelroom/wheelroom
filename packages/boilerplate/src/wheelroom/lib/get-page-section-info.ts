import { PageSectionProps } from '../../models/page-section/page-section'
import { TopicOptions, getTopicOptions } from './get-topic-options'

export interface PageSectionInfo {
  actionCount: number
  hasAction: boolean
  hasNavigation: boolean
  hasText: boolean
  hasTopic: boolean
  topicOptions: TopicOptions
  index: number
  navigationSegmentCount: number
  path: string
  sectionCount: number
  topicCount: number
  variation: string
}

export const getPageSectionInfo = (
  pageSection: PageSectionProps,
  overrideTopicOptions: TopicOptions = {}
): PageSectionInfo => {
  const info = {
    actionCount: 0,
    hasAction: false,
    hasNavigation: false,
    hasText: false,
    hasTopic: false,
    index: pageSection.index,
    navigationSegmentCount: 0,
    path: pageSection.page.path,
    sectionCount: pageSection.page.sections.length,
    topicCount: 0,
    variation: pageSection.variation,
  } as PageSectionInfo

  if (
    pageSection.actions &&
    Array.isArray(pageSection.actions) &&
    pageSection.actions.length > 0
  ) {
    info.hasAction = true
    info.actionCount = pageSection.actions.length
  }
  if (
    pageSection.topics &&
    Array.isArray(pageSection.topics) &&
    pageSection.topics.length > 0
  ) {
    info.topicOptions = getTopicOptions(
      pageSection.topicOptions,
      overrideTopicOptions
    )

    info.hasTopic = true
    info.topicCount = pageSection.topics.length
  }
  if (pageSection.text && pageSection.text.text && pageSection.locale) {
    info.hasText = true
  }
  if (
    pageSection.navigation &&
    Array.isArray(pageSection.navigation.segments) &&
    pageSection.navigation.segments.length > 0
  ) {
    info.hasNavigation = true
    info.navigationSegmentCount = pageSection.navigation.segments.length
  }
  return info
}

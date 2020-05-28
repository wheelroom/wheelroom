import { PageSectionProps } from '../../models/page-section/page-section'
import { TopicOptions, getTopicOptions } from './get-topic-options'

export interface PageSectionInfo {
  actionCount: number
  hasAction: boolean
  hasBlog: boolean
  hasNavigationSegment: boolean
  hasText: boolean
  hasTopic: boolean
  hasTopicTable: boolean
  index: number
  navigationCount: number
  path: string
  sectionCount: number
  topicCount: number
  topicTableCount: number
  topicOptions: TopicOptions
  variation: string
}

export const getPageSectionInfo = (
  pageSection: PageSectionProps,
  overrideTopicOptions: TopicOptions = {}
): PageSectionInfo => {
  const info = {
    actionCount: 0,
    hasAction: false,
    hasBlog: false,
    hasNavigationSegment: false,
    hasText: false,
    hasTopic: false,
    hasTopicTable: false,
    index: pageSection.index,
    navigationCount: 0,
    path: pageSection.page.path,
    sectionCount: pageSection.page.sections.length,
    topicCount: 0,
    topicTableCount: 0,
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
  if (pageSection.blog) {
    info.hasBlog = true
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
  if (
    pageSection.topicTables &&
    Array.isArray(pageSection.topicTables) &&
    pageSection.topicTables.length > 0
  ) {
    info.topicOptions = getTopicOptions(
      pageSection.topicOptions,
      overrideTopicOptions
    )

    info.hasTopicTable = true
    info.topicTableCount = pageSection.topicTables.length
  }
  if (pageSection.text && pageSection.text.text && pageSection.locale) {
    info.hasText = true
  }
  if (
    pageSection.navigation &&
    Array.isArray(pageSection.navigation) &&
    pageSection.navigation.length > 0 &&
    Array.isArray(pageSection.navigation[0].segments) &&
    pageSection.navigation[0].segments.length > 0
  ) {
    info.hasNavigationSegment = true
    info.navigationCount = pageSection.navigation.length
  }
  return info
}

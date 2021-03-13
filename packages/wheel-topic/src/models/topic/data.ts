import { ParserFunction } from '@wheelroom/core'

export interface TopicData {
  hideAbstract: boolean
  hideActions: boolean
  hideContent: boolean
  hideHeading: boolean
  hideIcon: boolean
  hideMedia: boolean
  hideText: boolean
  useAbstractParser: ParserFunction | undefined
  useHeadingParser: ParserFunction | undefined
}

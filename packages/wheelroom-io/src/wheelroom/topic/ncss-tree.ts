import {
  EmbedNcssTree,
  ImageElementNcssTree,
  MediaBreakpointNcssTree,
  Ncss,
  NcssNode,
  VideoElementNcssTree,
} from '@wheelroom/core'

export interface TopicNcssTree {
  ncssSwitch: Record<'containerAsLink' | 'container', Ncss>
  /** Media */
  media: NcssNode
  /** Video style */
  embed: EmbedNcssTree
  /** Image style */
  image: ImageElementNcssTree
  /** Media Breakpoint Style */
  mediaBreakpoint: MediaBreakpointNcssTree
  /** Video style */
  video: VideoElementNcssTree
  /** Content style */
  content: NcssNode
  /** Text style */
  text: NcssNode
  /** Icon style */
  icon: NcssNode
  /** Heading style */
  heading: NcssNode
  /** Abstract style */
  abstract: NcssNode
  /** Actions style */
  actionGroup: NcssNode
  /** Action style */
  action: {
    icon: NcssNode
  } & NcssNode
}

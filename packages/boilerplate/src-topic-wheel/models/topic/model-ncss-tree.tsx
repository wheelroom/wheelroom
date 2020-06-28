import {
  EmbedModelNcssTree,
  ImageElementNcssTree,
  MediaBreakpointModelNcssTree,
  Ncss,
  NcssNode,
  VideoElementNcssTree,
} from '../../../src-core'

export interface TopicModelNcssTree {
  ncssSwitch: Record<'containerAsLink' | 'container', Ncss>
  /** Media */
  media: NcssNode
  /** Video style */
  embed: EmbedModelNcssTree
  /** Image style */
  image: ImageElementNcssTree
  /** Media Breakpoint Style */
  mediaBreakpoint: MediaBreakpointModelNcssTree
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

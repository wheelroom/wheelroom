import {
  EmbedStyle,
  ImageElementStyle,
  MediaBreakpointStyle,
  NcssProps,
  VideoElementStyle,
} from '../../../../src-core'

export interface TopicMediaWheelStyle {
  /** Styling for this node */
  ncss: NcssProps
  /** Video style */
  embed: EmbedStyle
  /** Image style */
  image: ImageElementStyle
  /** Media Breakpoint Style */
  mediaBreakpoint: MediaBreakpointStyle
  /** Video style */
  video: VideoElementStyle
}

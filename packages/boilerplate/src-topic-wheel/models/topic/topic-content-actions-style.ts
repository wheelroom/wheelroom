import { NcssProps } from '../../../../src-core'

export interface TopicContentActionsWheelStyle {
  /** Styling for this node */
  ncss: NcssProps
  /** Action link or button style */
  link: {
    ncss: NcssProps
    icon: {
      ncss: NcssProps
    }
  }
}

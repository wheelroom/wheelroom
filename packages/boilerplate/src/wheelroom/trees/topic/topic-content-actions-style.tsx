import { NcssProps } from '../../elements/types'
import { buttonPrimaryStyle } from '../../../element-styles/button'

export interface TopicActionsTreeStyle {
  /** Wrapper around action */
  wrapper?: NcssProps
  /** Action link or button style */
  link?: NcssProps
}

export const topicContentActionsStyle: TopicActionsTreeStyle = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  link: buttonPrimaryStyle,
}

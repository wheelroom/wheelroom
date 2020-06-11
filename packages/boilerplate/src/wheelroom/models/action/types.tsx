/**
 * Component
 *
 * Component type: action
 *
 */

import { NcssProps, Wheel } from '../../types/wheel'

export interface ActionProps {
  /** Gatsby fetched data */
  __typename?: string
  anchor?: string
  description?: string
  eventId?: string
  heading?: string
  icon?: string
  page?: any
  query?: string
  url?: any
}

export interface ActionWheelStyle {
  ncss: NcssProps
  icon: {
    ncss: NcssProps
  }
}

export interface ActionWheel extends Wheel {
  style: ActionWheelStyle
}

export interface ActionWheelProps extends ActionProps {
  wheel: ActionWheel
  children?: any
  key?: any
  hideIcon?: boolean
  hideHeading?: boolean
  onClick?: () => any
}

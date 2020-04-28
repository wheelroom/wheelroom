/**
 * Component variation
 *
 * Component type: action
 * Variation: Single
 *
 */

import React, { Fragment } from 'react'
import { ActionProps } from '../../../../models/action'
import { GLink } from '../../element/g-link'
import { ALink } from '../../element/a-link'
import { NcssProps, Wheel } from '../../types'
import { Any } from '../../element/any'

export interface ActionWheelStyle {
  ncss: NcssProps
}

export interface ActionWheel extends Wheel {
  style: ActionWheelStyle
}

export interface ActionWheelProps extends ActionProps {
  /** Styling wheel */
  wheel: ActionWheel
  children?: any
  key?: any
}

const ActionGlink = (props: ActionWheelProps) => {
  return (
    <GLink
      to={props.page.path}
      wheel={props.wheel}
      ariaLabel={props.description}
    >
      {props.children ? props.children : props.heading}
    </GLink>
  )
}

const ActionAlink = (props: ActionWheelProps) => {
  if (props.url) {
    return (
      <ALink href={props.url} wheel={props.wheel} ariaLabel={props.description}>
        {props.children ? props.children : props.heading}
      </ALink>
    )
  } else {
    return (
      <Any is="span" wheel={props.wheel} ariaLabel={props.description}>
        {props.children ? props.children : props.heading}
      </Any>
    )
  }
}

export const Action = (props: ActionWheelProps) => {
  return (
    <Fragment>
      {props.page ? <ActionGlink {...props} /> : <ActionAlink {...props} />}
    </Fragment>
  )
}

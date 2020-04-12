/**
 * Component variation
 *
 * Component type: action
 * Variation: Single
 *
 */

import React, { Fragment } from 'react'
import { ActionProps } from '../../../models/action'
import { GLink } from '../elements/g-link'
import { ALink } from '../elements/a-link'
import { Wheel } from '../types'

export interface ActionWheelProps extends ActionProps {
  /** Styling wheel */
  wheel: Wheel
  children?: any
  key?: any
}

const ActionGlink = (props: ActionWheelProps) => {
  return (
    <GLink
      to={props.page.path}
      ncss={props.wheel.style.ncss}
      wheel={props.wheel}
    >
      {props.children ? props.children : props.heading}
    </GLink>
  )
}

const ActionAlink = (props: ActionWheelProps) => {
  return (
    <ALink href={props.url} ncss={props.wheel.style.ncss} wheel={props.wheel}>
      {props.children ? props.children : props.heading}
    </ALink>
  )
}

export const Action = (props: ActionWheelProps) => {
  return (
    <Fragment>
      {props.page ? <ActionGlink {...props} /> : <ActionAlink {...props} />}
    </Fragment>
  )
}

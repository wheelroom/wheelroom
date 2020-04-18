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
import { Wheel, NcssProps } from '../types'

export interface ActionPreset {
  ncss: NcssProps
}

export interface ActionWheel extends Wheel {
  style: ActionPreset
}

export interface ActionWheelProps extends ActionProps {
  /** Styling wheel */
  wheel: ActionWheel
  children?: any
  key?: any
}

const ActionGlink = (props: ActionWheelProps) => {
  return (
    <GLink to={props.page.path} wheel={props.wheel}>
      {props.children ? props.children : props.heading}
    </GLink>
  )
}

const ActionAlink = (props: ActionWheelProps) => {
  return (
    <ALink href={props.url} wheel={props.wheel}>
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

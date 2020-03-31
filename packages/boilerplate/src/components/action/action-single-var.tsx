/**
 * Component variation
 *
 * Component type: action
 * Variation: Single
 *
 */

import React, { Fragment } from 'react'
import { ActionProps } from './action'
import { GLink } from '../../core/elements/primary/g-link'
import { ALink } from '../../core/elements/primary/a-link'

const ActionGlink = (props: ActionProps) => {
  return (
    <GLink to={props.page.path} ncss={props.styleTree}>
      {props.children ? props.children : props.heading}
    </GLink>
  )
}

const ActionAlink = (props: ActionProps) => {
  return (
    <ALink href={props.url} ncss={props.styleTree}>
      {props.children ? props.children : props.heading}
    </ALink>
  )
}

export const ActionSingleVar = (props: ActionProps) => {
  return (
    <Fragment>
      {props.page ? <ActionGlink {...props} /> : <ActionAlink {...props} />}
    </Fragment>
  )
}

/**
 * Component variation
 *
 * Component type: action
 * Variation: Single
 *
 */

import React, { Fragment } from 'react'
import { ActionProps } from './action'
import { GLink } from '../../core/elements/g-link'
import { ALink } from '../../core/elements/a-link'

const ActionGlink = (props: ActionProps) => {
  return (
    <GLink to={props.page.path} ncss={props.ncss}>
      {props.children ? props.children : props.heading}
    </GLink>
  )
}

const ActionAlink = (props: ActionProps) => {
  return (
    <ALink href={props.url} ncss={props.ncss}>
      {props.children ? props.children : props.heading}
    </ALink>
  )
}

export const ActionSingleVar = (props: ActionProps) => {
  return (
    <Fragment>
      {props.page ? (
        <ActionGlink key={props.heading} {...props} />
      ) : (
        <ActionAlink key={props.heading} {...props} />
      )}
    </Fragment>
  )
}

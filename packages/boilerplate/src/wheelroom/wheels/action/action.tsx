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
import { NcssProps } from '../elements/types'

export interface ActionTreeProps extends ActionProps {
  /** Local data */
  children?: any
  treeStyle?: NcssProps
  key?: any
}

const ActionGlink = (props: ActionTreeProps) => {
  return (
    <GLink to={props.page.path} ncss={props.treeStyle}>
      {props.children ? props.children : props.heading}
    </GLink>
  )
}

const ActionAlink = (props: ActionTreeProps) => {
  return (
    <ALink href={props.url} ncss={props.treeStyle}>
      {props.children ? props.children : props.heading}
    </ALink>
  )
}

export const Action = (props: ActionTreeProps) => {
  return (
    <Fragment>
      {props.page ? <ActionGlink {...props} /> : <ActionAlink {...props} />}
    </Fragment>
  )
}

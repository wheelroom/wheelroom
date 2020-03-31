/**
 * Component variation
 *
 * Component type: action
 * Variation: Single
 *
 */

import React, { Fragment } from 'react'
import { ActionProps } from '../../../components/action'
import { GLink } from '../../primary-elements/g-link'
import { ALink } from '../../primary-elements/a-link'
import { StyleTree } from '../../lib/style-tree'

export interface ActionCoreProps {
  /** Local data */
  children?: any
  styleTree?: StyleTree
  key?: any
}

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

export const CoreAction = (props: ActionProps) => {
  return (
    <Fragment>
      {props.page ? <ActionGlink {...props} /> : <ActionAlink {...props} />}
    </Fragment>
  )
}
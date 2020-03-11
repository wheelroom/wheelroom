import React, { Fragment } from 'react'
import { GLink } from '../../views/core-elements/g-link'
import { ALink } from '../../views/core-elements/a-link'
import { ActionProps } from '../action'
import { buttonPrimaryStyle } from '../../styles/button'

const ActionGlink = (props: ActionProps) => {
  return (
    <GLink to={props.page.path} ncss={{ ...buttonPrimaryStyle }}>
      {props.heading}
    </GLink>
  )
}

const ActionAlink = (props: ActionProps) => {
  return (
    <ALink href={props.url} ncss={{ ...buttonPrimaryStyle }}>
      {props.heading}
    </ALink>
  )
}

export const NavAction = (props: ActionProps) => {
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
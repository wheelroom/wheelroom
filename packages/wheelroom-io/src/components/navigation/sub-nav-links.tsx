import React, { Fragment } from 'react'
import { GLink } from '../../views/core-elements/g-link'
import { ALink } from '../../views/core-elements/a-link'
import { ActionProps } from '../action'
import { buttonPrimaryStyle } from '../../styles/button'

const ActionGlink = (props: { action: ActionProps }) => {
  return (
    <GLink to={props.action.page.path} ncss={{ ...buttonPrimaryStyle }}>
      {props.action.heading}
    </GLink>
  )
}

const ActionAlink = (props: { action: ActionProps }) => {
  return (
    <ALink href={props.action.url} ncss={{ ...buttonPrimaryStyle }}>
      {props.action.heading}
    </ALink>
  )
}

interface NavLinksProps {
  actions: ActionProps[]
}
export const SubNavLinks = (props: NavLinksProps) => {
  return (
    <Fragment>
      {props.actions.map((action: ActionProps) =>
        action.page ? (
          <ActionGlink key={action.heading} action={action} />
        ) : (
          <ActionAlink key={action.heading} action={action} />
        )
      )}
    </Fragment>
  )
}

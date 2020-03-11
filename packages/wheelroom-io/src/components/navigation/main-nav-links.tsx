import React, { Fragment } from 'react'
import { navigationHeaderStyle } from '../../styles/navigation'
import { GLink } from '../../views/core-elements/g-link'
import { ALink } from '../../views/core-elements/a-link'
import { Any } from '../../views/core-elements/any'
import { ActionProps } from '../action'

const ActionGlink = (props: { action: ActionProps }) => {
  return (
    <GLink
      to={props.action.page.path}
      ncss={{
        label: 'NavActionGlink',
        ...navigationHeaderStyle,
      }}
    >
      {props.action.heading}
    </GLink>
  )
}

const ActionAlink = (props: { action: ActionProps }) => {
  return (
    <ALink
      href={props.action.url}
      ncss={{
        label: 'NavActionAlink',
        ...navigationHeaderStyle,
      }}
    >
      {props.action.heading}
    </ALink>
  )
}

interface NavLinksProps {
  actions: ActionProps[]
}
export const MainNavLinks = (props: NavLinksProps) => {
  console.log('main links', props)
  return (
    <Fragment>
      {props.actions.map((action: ActionProps) => (
        <Any is={'li'} ncss={{ label: 'NavItem' }} key={action.heading}>
          {action.page ? (
            <ActionGlink action={action} />
          ) : (
            <ActionAlink action={action} />
          )}
        </Any>
      ))}
    </Fragment>
  )
}

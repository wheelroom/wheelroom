import React, { Fragment } from 'react'
import { GLink } from '../../../core/elements/g-link'
import { buttonPrimaryStyle } from '../../../styles/button'
import { ALink } from '../../../core/elements/a-link'
import { ActionProps } from '../../action/action'

const style = {
  ...buttonPrimaryStyle,
  fontSize: [4, 5],
  display: 'inline-flex',
  py: 3,
  px: 4,
}

const ActionGlink = (props: ActionProps) => {
  return (
    <GLink to={props.page.path} ncss={style}>
      {props.heading}
    </GLink>
  )
}

const ActionAlink = (props: ActionProps) => {
  return (
    <ALink href={props.url} ncss={style}>
      {props.heading}
    </ALink>
  )
}

export const HeroAction = (props: ActionProps) => {
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

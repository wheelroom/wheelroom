import React from 'react'
import { A, Span } from '@wheelroom/any/elements'
import { graphql, Link } from 'gatsby'
import { Embed } from '../embed/embed'
import { FeatherIcon } from '../../lib/feather-icon'
import { useGlobals } from '../../lib/globals-provider'

export type Action = {
  sys: {
    id: string
  }
  anchor: string
  description: string
  eventId: string
  heading: string
  icon: string
  page: any
  query: string
  url: any
}

export interface ActionProps {
  children?: any
  hideHeading?: boolean
  hideIcon?: boolean
  key?: any
  model: Action
  onClick?: () => any
}

interface CreateURL {
  action: Action
  isPreviewMode: boolean
}

const createURL = ({ action, isPreviewMode }: CreateURL) => {
  const hasQuery = action.query || isPreviewMode
  let url: any = action.page ? action.page.path : action.url
  if (hasQuery) {
    url += '?'
    url += isPreviewMode ? '&preview=true' : ''
    url += action.query || ''
  }
  url += action.anchor ? '#' + action.anchor : ''
  return url
}

interface OnClickHander {
  eventId: string | undefined
  globals: any
}

const onClickHander = ({ eventId, globals }: OnClickHander) => {
  const siteEmbeds = globals.siteEmbeds || []
  siteEmbeds.forEach((embed: Embed) => {
    if (embed.code && embed.type === 'js-action') {
      Function('eventId', 'props', embed.code)(eventId, globals)
    }
  })
}

const ActionGlink = (props: ActionProps) => {
  const globals: any = useGlobals()
  const heading = props.children ? props.children : props.model.heading
  return (
    <Link
      aria-label={props.model.description}
      onClick={() => onClickHander({ eventId: props.model.eventId, globals })}
      to={createURL({
        action: props.model,
        isPreviewMode: globals.isPreviewMode,
      })}
    >
      {!props.hideHeading && heading}
      {props.model.icon && !props.hideIcon && (
        <FeatherIcon name={props.model.icon} />
      )}
    </Link>
  )
}

const ActionAlink = (props: ActionProps) => {
  const globals: any = useGlobals()
  const heading = props.children ? props.children : props.model.heading
  return (
    <A
      aria-label={props.model.description}
      href={createURL({
        action: props.model,
        isPreviewMode: globals.isPreviewMode,
      })}
      onClick={() => onClickHander({ eventId: props.model.eventId, globals })}
    >
      {!props.hideHeading && heading}
      {props.model.icon && !props.hideIcon && (
        <FeatherIcon name={props.model.icon} />
      )}
    </A>
  )
}

const NoLink = (props: ActionProps) => {
  const heading = props.children ? props.children : props.model.heading
  return (
    <Span aria-label={props.model.description}>
      {!props.hideHeading && heading}
      {props.model.icon && !props.hideIcon && (
        <FeatherIcon name={props.model.icon} />
      )}
    </Span>
  )
}

export const Action = (props: ActionProps) => {
  if (props.model.page) {
    return <ActionGlink {...props} />
  } else if (props.model.url) {
    return <ActionAlink {...props} />
  } else {
    return <NoLink {...props} />
  }
}

export const actionFragment = graphql`
  fragment Action on Contentful_Action {
    sys {
      id
    }
    description
    anchor
    eventId
    heading
    icon
    query
    url
  }
`

import React from 'react'
import { Any } from '@wheelroom/any/Any'
import { A } from '@wheelroom/any/elements'
import { Link } from 'gatsby'
import { EmbedNode } from '../embed/embed'
import { FeatherIcon } from '../feather-icon'
import { useGlobals } from '../../../lib/globals-provider'

export interface ActionNode {
  __typename?: string
  anchor?: string
  description?: string
  eventId?: string
  heading?: string
  icon?: string
  page?: any
  query?: string
  url?: any
}

export interface ActionProps {
  children?: any
  hideHeading?: boolean
  hideIcon?: boolean
  key?: any
  node: ActionNode
  onClick?: () => any
}

interface CreateURL {
  action: ActionNode
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
  siteEmbeds.forEach((embed: EmbedNode) => {
    if (embed.code && embed.type === 'js-action') {
      Function('eventId', 'props', embed.code.code)(eventId, globals)
    }
  })
}

// TODO: Add icon styling
const ActionGlink = (props: ActionProps) => {
  const globals: any = useGlobals()
  const heading = props.children ? props.children : props.node.heading
  return (
    <Link
      // ariaLabel={props.description}
      onClick={() => onClickHander({ eventId: props.node.eventId, globals })}
      to={createURL({
        action: props.node,
        isPreviewMode: globals.isPreviewMode,
      })}
    >
      {!props.hideHeading && heading}
      {props.node.icon && !props.hideIcon && (
        <FeatherIcon name={props.node.icon} />
      )}
    </Link>
  )
}

// TODO: Add icon styling
const ActionAlink = (props: ActionProps) => {
  const globals: any = useGlobals()
  const heading = props.children ? props.children : props.node.heading
  return (
    <A
      // ariaLabel={props.description}
      href={createURL({
        action: props.node,
        isPreviewMode: globals.isPreviewMode,
      })}
      onClick={() => onClickHander({ eventId: props.node.eventId, globals })}
    >
      {!props.hideHeading && heading}
      {props.node.icon && !props.hideIcon && (
        <FeatherIcon name={props.node.icon} />
      )}
    </A>
  )
}

// TODO: Add icon styling
const NoLink = (props: ActionProps) => {
  const heading = props.children ? props.children : props.node.heading
  return (
    <Any is="span" ariaLabel={props.node.description} polyPreset={true}>
      {!props.hideHeading && heading}
      {props.node.icon && !props.hideIcon && (
        <FeatherIcon name={props.node.icon} />
      )}
    </Any>
  )
}

export const Action = (props: ActionProps) => {
  if (props.node.page) {
    return <ActionGlink {...props} />
  } else if (props.node.url) {
    return <ActionAlink {...props} />
  } else {
    return <NoLink {...props} />
  }
}

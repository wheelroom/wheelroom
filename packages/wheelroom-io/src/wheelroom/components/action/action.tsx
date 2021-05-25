import React from 'react'
import { Any } from '@wheelroom/any/Any'
import { A } from '@wheelroom/any/elements'
import { Link } from 'gatsby'
import { EmbedNode } from '../embed/embed'
import { FeatherIcon } from '../feather-icon'
import { useGlobals } from '../../lib/globals-provider'

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

const createURL = (action: ActionProps, isPreviewMode: boolean) => {
  const hasQuery = action.node.query || isPreviewMode
  let url: any = action.node.page ? action.node.page.path : action.node.url
  if (hasQuery) {
    url += '?'
    url += isPreviewMode ? '&preview=true' : ''
    url += action.node.query || ''
  }
  url += action.node.anchor ? '#' + action.node.anchor : ''
  return url
}

const onClickHander = (eventId: string | undefined) => {
  // TODO: Where to get global site embeds and page props?
  const siteEmbeds = [] as any[]
  const pageProps = {}

  siteEmbeds.forEach((embed: EmbedNode) => {
    if (embed.code && embed.type === 'js-action') {
      Function('eventId', 'props', embed.code.code)(eventId, pageProps)
    }
  })
}

// TODO: Where to get previewMode?
const isPreviewMode = false

// TODO: Add icon styling
const ActionGlink = (props: ActionProps) => {
  const globals = useGlobals()
  console.log(globals)
  const heading = props.children ? props.children : props.node.heading
  return (
    <Link
      // ariaLabel={props.description}
      onClick={() => onClickHander(props.node.eventId)}
      to={createURL(props, isPreviewMode)}
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
  const heading = props.children ? props.children : props.node.heading
  return (
    <A
      // ariaLabel={props.description}
      href={createURL(props, isPreviewMode)}
      onClick={() => onClickHander(props.node.eventId)}
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

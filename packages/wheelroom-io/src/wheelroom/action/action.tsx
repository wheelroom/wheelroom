import React from 'react'
import { Any } from '@wheelroom/any/Any'
import { A } from '@wheelroom/any/elements'
import { Link } from 'gatsby'
import { EmbedModel } from '../embed/embed'
import { FeatherIcon } from '../../components/feather-icon'

export interface ActionModel {
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

export interface ActionProps extends ActionModel {
  children?: any
  key?: any
  hideIcon?: boolean
  hideHeading?: boolean
  onClick?: () => any
}

const createURL = (action: ActionProps, isPreviewMode: boolean) => {
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

const onClickHander = (eventId: string | undefined) => {
  // TODO: Where to get global site embeds and page props?
  const siteEmbeds = [] as any[]
  const pageProps = {}

  siteEmbeds.forEach((embed: EmbedModel) => {
    if (embed.code && embed.type === 'js-action') {
      Function('eventId', 'props', embed.code.code)(eventId, pageProps)
    }
  })
}

// TODO: Where to get previewMode?
const isPreviewMode = false

// TODO: Add icon styling
const ActionGlink = (props: ActionProps) => {
  const heading = props.children ? props.children : props.heading
  return (
    <Link
      // ariaLabel={props.description}
      onClick={() => onClickHander(props.eventId)}
      to={createURL(props, isPreviewMode)}
    >
      {!props.hideHeading && heading}
      {props.icon && !props.hideIcon && <FeatherIcon name={props.icon} />}
    </Link>
  )
}

// TODO: Add icon styling
const ActionAlink = (props: ActionProps) => {
  const heading = props.children ? props.children : props.heading
  return (
    <A
      // ariaLabel={props.description}
      href={createURL(props, isPreviewMode)}
      onClick={() => onClickHander(props.eventId)}
    >
      {!props.hideHeading && heading}
      {props.icon && !props.hideIcon && <FeatherIcon name={props.icon} />}
    </A>
  )
}

// TODO: Add icon styling
const NoLink = (props: ActionProps) => {
  const heading = props.children ? props.children : props.heading
  return (
    <Any is="span" ariaLabel={props.description} polyPreset={true}>
      {!props.hideHeading && heading}
      {props.icon && !props.hideIcon && <FeatherIcon name={props.icon} />}
    </Any>
  )
}

export const Action = (props: ActionProps) => {
  if (props.page) {
    return <ActionGlink {...props} />
  } else if (props.url) {
    return <ActionAlink {...props} />
  } else {
    return <NoLink {...props} />
  }
}

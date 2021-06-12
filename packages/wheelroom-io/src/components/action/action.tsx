import { A, Span } from '@wheelroom/any/elements'
import { graphql, Link } from 'gatsby'
import { css } from '@emotion/css'
import { Embed } from '../media/embed'
import { FeatherIcon } from '../../lib/feather-icon'
import { useGlobals } from '../../lib/globals-provider'
import { ActionVariantMap } from './action-variants'
import { actionVariantStyle } from './action-variant-style'

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
  variantMap: ActionVariantMap
  onClick?: () => any
}

interface CreateURL {
  action: Action
  isPreviewMode: boolean
  url: string
}

const createURL = ({ url, action, isPreviewMode }: CreateURL) => {
  const hasQuery = action.query || isPreviewMode
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
      className={css(actionVariantStyle({ variant: props.variantMap.action }))}
      aria-label={props.model.description}
      onClick={() => onClickHander({ eventId: props.model.eventId, globals })}
      to={createURL({
        action: props.model,
        isPreviewMode: globals.isPreviewMode,
        url: props.model.page.path,
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
      css={actionVariantStyle({ variant: props.variantMap.action })}
      aria-label={props.model.description}
      href={createURL({
        action: props.model,
        isPreviewMode: globals.isPreviewMode,
        url: props.model.url,
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
  console.log(props)
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
    page {
      path
    }
    query
    url
  }
`

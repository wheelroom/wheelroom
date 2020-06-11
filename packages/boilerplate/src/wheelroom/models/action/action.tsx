/**
 * Component variation
 *
 * Component type: action
 * Variation: Single
 *
 */

import React, { useContext } from 'react'
import { ActionWheelProps } from './types'
import { AdminCoreContext, AdminCoreState } from '@wheelroom/admin-core'
import { ALink } from '../../elements/a-link'
import { Any } from '../../elements/any'
import { EmbedProps } from '../embed/embed'
import { FeatherIcon } from '../../elements/icon'
import { getPreviewPageStore } from '@wheelroom/admin-page-preview'
import { GLink } from '../../elements/g-link'

const createURL = (action: ActionWheelProps, isPreviewMode: boolean) => {
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

const onClickHander = (
  eventId: string | undefined,
  adminCoreState: AdminCoreState
) => {
  const globals =
    adminCoreState.pageProps && adminCoreState.pageProps.data.globals
  if (globals && globals.siteEmbeds && Array.isArray(globals.siteEmbeds)) {
    globals.siteEmbeds.forEach((embed: EmbedProps) => {
      if (embed.code && embed.type === 'js-action') {
        Function(
          'eventId',
          'props',
          embed.code.code
        )(eventId, adminCoreState.pageProps)
      }
    })
  }
}

const isPreviewMode = (adminCoreState: AdminCoreState): boolean => {
  const store = getPreviewPageStore(adminCoreState)
  return !!(store && store.state.inPreviewMode)
}

const ActionGlink = (props: ActionWheelProps) => {
  const { adminCoreState } = useContext(AdminCoreContext)
  const heading = props.children ? props.children : props.heading
  return (
    <GLink
      ariaLabel={props.description}
      onClick={() => onClickHander(props.eventId, adminCoreState)}
      to={createURL(props, isPreviewMode(adminCoreState))}
      wheel={props.wheel}
    >
      {!props.hideHeading && heading}
      {props.icon && !props.hideIcon && (
        <FeatherIcon
          icon={props.icon}
          wheel={{
            ...props.wheel,
            style: props.wheel.style.icon,
          }}
        />
      )}
    </GLink>
  )
}

const ActionAlink = (props: ActionWheelProps) => {
  const { adminCoreState } = useContext(AdminCoreContext)
  const heading = props.children ? props.children : props.heading
  return (
    <ALink
      ariaLabel={props.description}
      href={createURL(props, isPreviewMode(adminCoreState))}
      onClick={() => onClickHander(props.eventId, adminCoreState)}
      wheel={props.wheel}
    >
      {!props.hideHeading && heading}
      {props.icon && !props.hideIcon && (
        <FeatherIcon
          icon={props.icon}
          wheel={{
            ...props.wheel,
            style: props.wheel.style.icon,
          }}
        />
      )}
    </ALink>
  )
}

const NoLink = (props: ActionWheelProps) => {
  const heading = props.children ? props.children : props.heading
  return (
    <Any
      is="span"
      wheel={props.wheel}
      ariaLabel={props.description}
      polyPreset={true}
    >
      {!props.hideHeading && heading}
      {props.icon && !props.hideIcon && (
        <FeatherIcon
          icon={props.icon}
          wheel={{
            ...props.wheel,
            style: props.wheel.style.icon,
          }}
        />
      )}
    </Any>
  )
}

export const Action = (props: ActionWheelProps) => {
  if (props.page) {
    return <ActionGlink {...props} />
  } else if (props.url) {
    return <ActionAlink {...props} />
  } else {
    return <NoLink {...props} />
  }
}

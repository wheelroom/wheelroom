/**
 * Component variation
 *
 * Component type: action
 * Variation: Single
 *
 */

import React, { Fragment, useContext } from 'react'
import { AdminCoreContext, AdminCoreState } from '@wheelroom/admin-core'
import { getPreviewQueryString } from '@wheelroom/admin-page-preview'
import { ActionProps } from '../../../../models/action'
import { ALink } from '../../element/a-link'
import { Any } from '../../element/any'
import { EmbedProps } from '../../../../models/embed'
import { GLink } from '../../element/g-link'
import { NcssProps, Wheel } from '../../types'

export interface ActionWheelStyle {
  ncss: NcssProps
}

export interface ActionWheel extends Wheel {
  style: ActionWheelStyle
}

export interface ActionWheelProps extends ActionProps {
  /** Styling wheel */
  wheel: ActionWheel
  children?: any
  key?: any
  /** On click handler */
  onClick?: () => any
}

const createURL = (
  action: ActionWheelProps,
  adminCoreState: AdminCoreState
) => {
  const getPreviewQuery =
    getPreviewQueryString(adminCoreState) && action.page ? '?preview=true' : ''
  const setQuery = !getPreviewQuery && action.page ? '?' : ''
  const getUrl = action.page ? action.page.path : action.url
  const getQuery = action.query ? setQuery + action.query : ''
  const getAnchor = action.anchor ? '#' + action.anchor : ''
  return getUrl + getPreviewQuery + getQuery + getAnchor
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
        Function('eventId', embed.code.code)(eventId)
      }
    })
  }
}

const ActionGlink = (props: ActionWheelProps) => {
  const { adminCoreState } = useContext(AdminCoreContext)
  return (
    <GLink
      ariaLabel={props.description}
      onClick={() => onClickHander(props.eventId, adminCoreState)}
      to={createURL(props, adminCoreState)}
      wheel={props.wheel}
    >
      {props.children ? props.children : props.heading}
    </GLink>
  )
}

const ActionAlink = (props: ActionWheelProps) => {
  const { adminCoreState } = useContext(AdminCoreContext)
  if (props.url) {
    return (
      <ALink
        ariaLabel={props.description}
        href={createURL(props, adminCoreState)}
        onClick={() => onClickHander(props.eventId, adminCoreState)}
        wheel={props.wheel}
      >
        {props.children ? props.children : props.heading}
      </ALink>
    )
  } else {
    return (
      <Any is="span" wheel={props.wheel} ariaLabel={props.description}>
        {props.children ? props.children : props.heading}
      </Any>
    )
  }
}

export const Action = (props: ActionWheelProps) => {
  return (
    <Fragment>
      {props.page ? <ActionGlink {...props} /> : <ActionAlink {...props} />}
    </Fragment>
  )
}

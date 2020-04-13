/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Link } from 'gatsby'
import { useContext } from 'react'
import { AdminCoreContext } from '@wheelroom/admin-core'
import { getPreviewQueryString } from '@wheelroom/admin-page-preview'
import { NcssProps, Wheel } from '../types'
import { gLinkPreset } from './g-link-preset'
import { styledSystem } from '@wheelroom/styled-system'

export interface GLinkProps {
  /** Styling wheel */
  wheel: Wheel
  /** React children */
  children?: any
  /** Nested emotion css styling */
  ncss?: NcssProps
  /** URL attribute */
  to?: any
  /** ID attribute */
  id?: string | undefined
  /** Link aria-label attribute */
  ariaLabel?: string | undefined
  /** Aria-hidden attribute */
  ariaHidden?: boolean | undefined
  /** Title attribute */
  title?: string | undefined
}

export const GLink = (props: GLinkProps) => {
  const { adminCoreState } = useContext(AdminCoreContext)
  if (!props.to) {
    return null
  }
  return (
    <Link
      activeClassName="active"
      id={props.id}
      title={props.title}
      aria-label={props.ariaLabel}
      aria-hidden={props.ariaHidden}
      css={styledSystem(props.wheel.styledSystemConfig, props.wheel.theme, {
        ncss: {
          ...props.wheel.elementPresets.gLink.ncss,
          ...gLinkPreset.ncss,
          ...props.ncss,
        },
      })}
      to={props.to + getPreviewQueryString(adminCoreState)}
    >
      {props.children}
    </Link>
  )
}

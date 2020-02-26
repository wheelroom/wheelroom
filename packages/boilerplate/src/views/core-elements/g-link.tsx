/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Link } from 'gatsby'
import { emotionCss } from './emotion-css'
import { AdminModuleContext } from 'gatsby-theme-admin-panel'
import { getPreviewQueryString } from '@jacco-meijer/gatsby-theme-admin-modules'
import { useContext } from 'react'

export const GLink = (props: any) => {
  const { adminPanelState } = useContext(AdminModuleContext)

  return (
    <Link
      css={emotionCss({
        ncss: {
          display: 'inline-block',
          textDecoration: 'none',
          ...props.ncss,
        },
      })}
      to={props.to + getPreviewQueryString(adminPanelState)}
    >
      {props.children}
    </Link>
  )
}

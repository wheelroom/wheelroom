/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Link } from 'gatsby'
import { emotionCss } from './emotion-css'
import { useContext } from 'react'
import { AdminCoreContext } from '@wheelroom/admin-core'
import { getPreviewQueryString } from '@wheelroom/admin-page-preview'

export const GLink = (props: any) => {
  const { adminCoreState } = useContext(AdminCoreContext)
  return (
    <Link
      css={emotionCss({
        ncss: {
          display: 'inline-block',
          textDecoration: 'none',
          ...props.ncss,
        },
      })}
      to={props.to + getPreviewQueryString(adminCoreState)}
    >
      {props.children}
    </Link>
  )
}

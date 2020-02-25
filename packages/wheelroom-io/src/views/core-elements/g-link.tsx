/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Link } from 'gatsby'
import { emotionCss } from './emotion-css'
import { useAdminModuleReducer } from 'gatsby-theme-admin-panel'
import { getPreviewQueryString } from '../../admin-modules/page-preview/getters'

export const GLink = (props: any) => {
  const [adminModuleState] = useAdminModuleReducer()

  return (
    <Link
      css={emotionCss({
        ncss: {
          display: 'inline-block',
          textDecoration: 'none',
          ...props.ncss,
        },
      })}
      to={props.to + getPreviewQueryString(adminModuleState)}
    >
      {props.children}
    </Link>
  )
}

/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Link } from 'gatsby'
import { emotionCss } from './emotion-css'
import { getPreviewQueryString } from '../../admin-modules/page-preview/preview-update-button'

export const GLink = (props: any) => (
  <Link
    css={emotionCss({
      ncss: { display: 'inline-block', textDecoration: 'none', ...props.ncss },
    })}
    to={props.to + getPreviewQueryString()}
  >
    {props.children}
  </Link>
)

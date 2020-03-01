/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Link } from 'gatsby'
import { systemCss } from '../../styled-system/system-css'
import { useContext } from 'react'
import { AdminCoreContext } from '@jacco-meijer/admin-core'
import { getPreviewQueryString } from '@jacco-meijer/admin-page-preview'

export const GLink = (props: any) => {
  if (!props.to) {
    return null
  }
  const { adminCoreState } = useContext(AdminCoreContext)
  return (
    <Link
      css={systemCss({
        ncss: {
          ...props.ncss,
        },
      })}
      to={props.to + getPreviewQueryString(adminCoreState)}
    >
      {props.children}
    </Link>
  )
}

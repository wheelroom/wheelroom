/** @jsx jsx */
import { jsx } from '@emotion/core'
import { systemCss, ThemeId } from '../../styled-system/system-css'
import { useGetCurrentThemeId } from '@jacco-meijer/admin-theme-switcher'

export const ALink = (props: any) => {
  const currentThemeId = useGetCurrentThemeId() as ThemeId

  return (
    <a
      css={systemCss(
        {
          ncss: { ...props.ncss },
        },
        currentThemeId
      )}
      href={props.href}
    >
      {props.children}
    </a>
  )
}

/** @jsx jsx */
import { jsx } from '@emotion/core'
import { systemCss, ThemeId } from '../../styled-system/system-css'
import { useGetCurrentThemeId } from '@jacco-meijer/admin-theme-switcher'

export const Button = (props: any) => {
  const currentThemeId = useGetCurrentThemeId() as ThemeId

  return (
    <button
      css={systemCss(
        {
          ncss: { ...props.ncss },
        },
        currentThemeId
      )}
      value={props.value}
    >
      {props.children}
    </button>
  )
}

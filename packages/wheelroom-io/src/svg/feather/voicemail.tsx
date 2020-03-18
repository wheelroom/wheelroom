import React, { SVGProps } from 'react'
import { systemCss } from '../../styled-system/system-css'
import { useGetCurrentThemeId } from '@jacco-meijer/admin-theme-switcher'
export interface IconProps extends SVGProps<SVGSVGElement> {
  ncss: any;
}
const componentId = 'svg-voicemail'
export const SvgVoicemail = (props: IconProps) => {
  const currentThemeId: any = useGetCurrentThemeId()
  const strokeWidth = props.strokeWidth || 2
  const css = systemCss(
    {
      ncss: props.ncss,
    },
    currentThemeId
  )
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="voicemail_svg__feather voicemail_svg__feather-voicemail"
      css={css}
      id={componentId}
      width="100%"
    >
      <circle cx={5.5} cy={11.5} r={4.5} />
      <circle cx={18.5} cy={11.5} r={4.5} />
      <path d="M5.5 16h13" />
    </svg>
  )
}

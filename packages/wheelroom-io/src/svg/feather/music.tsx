import React, { SVGProps } from 'react'
import { systemCss } from '../../styled-system/system-css'
import { useGetCurrentThemeId } from '@jacco-meijer/admin-theme-switcher'
export interface IconProps extends SVGProps<SVGSVGElement> {
  ncss: any;
}
const componentId = 'svg-music'
export const SvgMusic = (props: IconProps) => {
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
      className="music_svg__feather music_svg__feather-music"
      css={css}
      id={componentId}
      width="100%"
      {...props}
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx={6} cy={18} r={3} />
      <circle cx={18} cy={16} r={3} />
    </svg>
  )
}

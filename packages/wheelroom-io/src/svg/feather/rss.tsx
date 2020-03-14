import React, { SVGProps } from 'react'
import { systemCss } from '../../styled-system/system-css'
import { useGetCurrentThemeId } from '@jacco-meijer/admin-theme-switcher'
export interface IconProps extends SVGProps<SVGSVGElement> {
  ncss: any;
}
const componentId = 'svg-rss'
export const SvgRss = (props: IconProps) => {
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
      className="rss_svg__feather rss_svg__feather-rss"
      css={css}
      id={componentId}
      width="100%"
      {...props}
    >
      <path d="M4 11a9 9 0 019 9M4 4a16 16 0 0116 16" />
      <circle cx={5} cy={19} r={1} />
    </svg>
  )
}

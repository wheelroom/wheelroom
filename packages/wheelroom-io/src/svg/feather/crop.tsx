import React, { SVGProps } from 'react'
import { systemCss } from '../../styled-system/system-css'
import { useGetCurrentThemeId } from '@jacco-meijer/admin-theme-switcher'
export interface IconProps extends SVGProps<SVGSVGElement> {
  ncss: any;
}
const componentId = 'svg-crop'
export const SvgCrop = (props: IconProps) => {
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
      className="crop_svg__feather crop_svg__feather-crop"
      css={css}
      id={componentId}
      width="100%"
      {...props}
    >
      <path d="M6.13 1L6 16a2 2 0 002 2h15" />
      <path d="M1 6.13L16 6a2 2 0 012 2v15" />
    </svg>
  )
}

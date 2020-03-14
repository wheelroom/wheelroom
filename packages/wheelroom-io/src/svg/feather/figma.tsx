import React, { SVGProps } from 'react'
import { systemCss } from '../../styled-system/system-css'
import { useGetCurrentThemeId } from '@jacco-meijer/admin-theme-switcher'
export interface IconProps extends SVGProps<SVGSVGElement> {
  ncss: any;
}
const componentId = 'svg-figma'
export const SvgFigma = (props: IconProps) => {
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
      className="figma_svg__feather figma_svg__feather-figma"
      css={css}
      id={componentId}
      width="100%"
      {...props}
    >
      <path d="M5 5.5A3.5 3.5 0 018.5 2H12v7H8.5A3.5 3.5 0 015 5.5zM12 2h3.5a3.5 3.5 0 110 7H12V2z" />
      <path d="M12 12.5a3.5 3.5 0 117 0 3.5 3.5 0 11-7 0zM5 19.5A3.5 3.5 0 018.5 16H12v3.5a3.5 3.5 0 11-7 0zM5 12.5A3.5 3.5 0 018.5 9H12v7H8.5A3.5 3.5 0 015 12.5z" />
    </svg>
  )
}

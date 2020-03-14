import React, { SVGProps } from 'react'
import { systemCss } from '../../styled-system/system-css'
import { useGetCurrentThemeId } from '@jacco-meijer/admin-theme-switcher'
export interface IconProps extends SVGProps<SVGSVGElement> {
  ncss: any;
}
const componentId = 'svg-crosshair'
export const SvgCrosshair = (props: IconProps) => {
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
      className="crosshair_svg__feather crosshair_svg__feather-crosshair"
      css={css}
      id={componentId}
      width="100%"
      {...props}
    >
      <circle cx={12} cy={12} r={10} />
      <path d="M22 12h-4M6 12H2M12 6V2M12 22v-4" />
    </svg>
  )
}

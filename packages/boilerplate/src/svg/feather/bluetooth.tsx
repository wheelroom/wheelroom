import React, { SVGProps } from 'react'
import { systemCss } from '../../wheelroom/styled-system/system-css'
import { useGetCurrentThemeId } from '@wheelroom/admin-theme-switcher'
export interface IconProps extends SVGProps<SVGSVGElement> {
  ncss: any;
}
const componentId = 'svg-bluetooth'
export const SvgBluetooth = (props: IconProps) => {
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
      className="bluetooth_svg__feather bluetooth_svg__feather-bluetooth"
      css={css}
      id={componentId}
      width="100%"
    >
      <path d="M6.5 6.5l11 11L12 23V1l5.5 5.5-11 11" />
    </svg>
  )
}

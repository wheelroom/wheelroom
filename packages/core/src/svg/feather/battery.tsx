import React, { SVGProps } from 'react'
const componentId = 'svg-battery'
export const SvgBattery = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="battery_svg__feather battery_svg__feather-battery"
      id={componentId}
      width="100%"
    >
      <rect x={1} y={6} width={18} height={12} rx={2} ry={2} />
      <path d="M23 13v-2" />
    </svg>
  )
}

import React, { SVGProps } from 'react'
const componentId = 'svg-layout'
export const SvgLayout = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="layout_svg__feather layout_svg__feather-layout"
      id={componentId}
      width="100%"
    >
      <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
      <path d="M3 9h18M9 21V9" />
    </svg>
  )
}

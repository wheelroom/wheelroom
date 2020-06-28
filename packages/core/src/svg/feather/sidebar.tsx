import React, { SVGProps } from 'react'
const componentId = 'svg-sidebar'
export const SvgSidebar = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="sidebar_svg__feather sidebar_svg__feather-sidebar"
      id={componentId}
      width="100%"
    >
      <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
      <path d="M9 3v18" />
    </svg>
  )
}

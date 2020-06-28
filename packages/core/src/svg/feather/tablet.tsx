import React, { SVGProps } from 'react'
const componentId = 'svg-tablet'
export const SvgTablet = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="tablet_svg__feather tablet_svg__feather-tablet"
      id={componentId}
      width="100%"
    >
      <rect x={4} y={2} width={16} height={20} rx={2} ry={2} />
      <path d="M12 18h.01" />
    </svg>
  )
}

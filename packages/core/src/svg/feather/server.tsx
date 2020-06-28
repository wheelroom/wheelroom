import React, { SVGProps } from 'react'
const componentId = 'svg-server'
export const SvgServer = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="server_svg__feather server_svg__feather-server"
      id={componentId}
      width="100%"
    >
      <rect x={2} y={2} width={20} height={8} rx={2} ry={2} />
      <rect x={2} y={14} width={20} height={8} rx={2} ry={2} />
      <path d="M6 6h.01M6 18h.01" />
    </svg>
  )
}

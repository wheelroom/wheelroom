import React, { SVGProps } from 'react'
const componentId = 'svg-trello'
export const SvgTrello = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="trello_svg__feather trello_svg__feather-trello"
      id={componentId}
      width="100%"
    >
      <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
      <path d="M7 7h3v9H7zM14 7h3v5h-3z" />
    </svg>
  )
}

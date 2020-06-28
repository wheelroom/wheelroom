import React, { SVGProps } from 'react'
const componentId = 'svg-speaker'
export const SvgSpeaker = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="speaker_svg__feather speaker_svg__feather-speaker"
      id={componentId}
      width="100%"
    >
      <rect x={4} y={2} width={16} height={20} rx={2} ry={2} />
      <circle cx={12} cy={14} r={4} />
      <path d="M12 6h.01" />
    </svg>
  )
}

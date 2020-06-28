import React, { SVGProps } from 'react'
const componentId = 'svg-skip-back'
export const SvgSkipBack = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="skip-back_svg__feather skip-back_svg__feather-skip-back"
      id={componentId}
      width="100%"
    >
      <path d="M19 20L9 12l10-8v16zM5 19V5" />
    </svg>
  )
}

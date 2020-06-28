import React, { SVGProps } from 'react'
const componentId = 'svg-italic'
export const SvgItalic = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="italic_svg__feather italic_svg__feather-italic"
      id={componentId}
      width="100%"
    >
      <path d="M19 4h-9M14 20H5M15 4L9 20" />
    </svg>
  )
}

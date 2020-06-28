import React, { SVGProps } from 'react'
const componentId = 'svg-folder-minus'
export const SvgFolderMinus = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="folder-minus_svg__feather folder-minus_svg__feather-folder-minus"
      id={componentId}
      width="100%"
    >
      <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2zM9 14h6" />
    </svg>
  )
}

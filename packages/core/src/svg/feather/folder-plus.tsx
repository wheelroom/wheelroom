import React, { SVGProps } from 'react'
const componentId = 'svg-folder-plus'
export const SvgFolderPlus = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="folder-plus_svg__feather folder-plus_svg__feather-folder-plus"
      id={componentId}
      width="100%"
    >
      <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2zM12 11v6M9 14h6" />
    </svg>
  )
}

import React, { SVGProps } from 'react'
const componentId = 'svg-git-merge'
export const SvgGitMerge = (props: SVGProps<SVGSVGElement>) => {
  const strokeWidth = props.strokeWidth || 2
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="git-merge_svg__feather git-merge_svg__feather-git-merge"
      id={componentId}
      width="100%"
    >
      <circle cx={18} cy={18} r={3} />
      <circle cx={6} cy={6} r={3} />
      <path d="M6 21V9a9 9 0 009 9" />
    </svg>
  )
}

import React, { SVGProps } from 'react'
import { Wheel } from '../../wheels/types'
import { styledSystem } from '@wheelroom/styled-system'
export interface IconProps extends SVGProps<SVGSVGElement> {
  ncss: any
  wheel: Wheel
}
const componentId = 'svg-git-commit'
export const SvgGitCommit = (props: IconProps) => {
  const strokeWidth = props.strokeWidth || 2
  const css = styledSystem(props.wheel.styledSystemConfig, props.wheel.theme, {
    ncss: props.ncss,
  })
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="git-commit_svg__feather git-commit_svg__feather-git-commit"
      css={css}
      id={componentId}
      width="100%"
    >
      <circle cx={12} cy={12} r={4} />
      <path d="M1.05 12H7M17.01 12h5.95" />
    </svg>
  )
}

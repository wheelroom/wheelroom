/** @jsx jsx */
import { jsx } from '@emotion/core'
import { emotionCss } from './emotion-css'

export const Box = (props: any) => (
  <div
    onClick={props.onClick}
    css={emotionCss({
      ncss: { boxSizing: 'border-box', ...props.ncss },
    })}
  >
    {props.children}
  </div>
)

export const Flex = (props: any) => (
  <div
    onClick={props.onClick}
    css={emotionCss({
      ncss: {
        boxSizing: 'border-box',
        display: 'flex',
        flexWrap: 'wrap',
        ...props.ncss,
      },
    })}
  >
    {props.children}
  </div>
)

export const Container = (props: any) => {
  return (
    <div
      css={emotionCss({
        ncss: {
          mx: 'auto',
          maxWidth: '1200px',
          ...props.ncss,
        },
      })}
    >
      {props.children}
    </div>
  )
}

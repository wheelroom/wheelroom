/** @jsx jsx */
import { jsx } from '@emotion/core'
import { emotionCss } from './emotion-css.js'

export const Box = (props: any) => (
  <div
    css={emotionCss({ ncss: { boxSizing: 'border-box', ...props.ncss } })}
    children={props.children}
  />
)

export const Flex = (props: any) => (
  <div
    css={emotionCss({
      ncss: {
        boxSizing: 'border-box',
        display: 'flex',
        flexWrap: 'wrap',
        ...props.ncss,
      },
    })}
    children={props.children}
  />
)

export const Container = (props: any) => {
  return (
    <div
      css={emotionCss({
        ncss: { mx: 'auto', maxWidth: '1024px', ...props.ncss },
      })}
      children={props.children}
    />
  )
}

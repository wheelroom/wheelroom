/** @jsx jsx */
import { jsx } from '@emotion/core'
import { styledSystem } from '../styled-system/styled-system'

export const Box = (props: any) => (
  <div css={styledSystem(props)} children={props.children} />
)

export const Flex = (props: any) => (
  <div
    css={styledSystem({ display: 'flex', flexWrap: 'wrap', ...props })}
    children={props.children}
  />
)

export const Container = (props: any) => {
  console.log('container', props)
  return (
    <div
      css={styledSystem({ mx: 'auto', maxWidth: '1024px', ...props })}
      children={props.children}
    />
  )
}

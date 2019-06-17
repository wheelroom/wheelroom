/** @jsx jsx */
import { jsx } from '@emotion/core'
import { styledSystem } from '../styled-system/styled-system'

export const Heading = (props: any) => (
  <div children={props.children} css={styledSystem(props)} />
)

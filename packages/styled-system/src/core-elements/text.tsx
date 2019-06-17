/** @jsx jsx */
import { jsx } from '@emotion/core'
import { styledSystem } from '../styled-system/styled-system'

export const Text = (props: any) => (
  <p children={props.children} css={styledSystem(props)} />
)

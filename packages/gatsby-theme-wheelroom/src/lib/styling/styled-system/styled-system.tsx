import { parseStyles } from './parse-styles'

// Small wrapper that allows us to do: css={styledSystem(props)}
export const styledSystem = (props: any) => (theme: any) =>
  parseStyles(theme, props)

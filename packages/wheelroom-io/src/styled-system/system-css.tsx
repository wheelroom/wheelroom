import { styledSystem } from '@jacco-meijer/styled-system'
import { styledSystemConfig } from './styled-system-config'
import { styledSystemTheme } from './styled-system-theme'

export const systemCss = (props: any) =>
  styledSystem(styledSystemConfig, styledSystemTheme, { ncss: props.ncss })

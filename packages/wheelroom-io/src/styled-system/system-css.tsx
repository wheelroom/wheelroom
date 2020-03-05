import { styledSystem } from '@jacco-meijer/styled-system'
import { styledSystemConfig } from './styled-system-config'
import { lightTheme } from './light-theme'

export const systemCss = (props: any) =>
  styledSystem(styledSystemConfig, lightTheme, { ncss: props.ncss })

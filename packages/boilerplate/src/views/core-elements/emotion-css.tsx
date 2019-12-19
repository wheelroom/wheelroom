import { styledSystem } from '@jacco-meijer/styled-system'
import { styledSystemConfig } from '../../styled-system/styled-system-config.js'
import { styledSystemTheme } from '../../styled-system/styled-system-theme.js'

export const emotionCss = (props: any) =>
  styledSystem(styledSystemConfig, styledSystemTheme, { ncss: props.ncss })

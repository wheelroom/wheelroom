import { styledSystem } from '@wheelroom/styled-system'
import { styledSystemConfig } from '../../styled-system/styled-system-config'
import { styledSystemTheme } from '../../styled-system/styled-system-theme'

export const emotionCss = (props: any) =>
  styledSystem(styledSystemConfig, styledSystemTheme, { ncss: props.ncss })

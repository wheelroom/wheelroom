import { SectionWheels } from './section-wheels'
import { Wheel } from './wheel'

export interface GetWheel {
  sectionWheels: SectionWheels
  wheelId: string
  variation: string
  themeId: string
}

export const getWheel = (params: GetWheel): Wheel => {
  const theme =
    params.sectionWheels.themes[
      params.themeId || params.sectionWheels.defaultThemeId
    ]
  const wheel: Wheel = {
    style: theme.styles[params.wheelId][params.variation],
    elementStyles: theme.elementStyles,
    theme: theme.wrSystemTheme,
    wrSystemConfig: params.sectionWheels.wrSystemConfig,
  }
  return wheel
}

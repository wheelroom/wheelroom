import { SectionWheels } from './section-wheels'
import { Wheel } from './wheel'

export interface GetWheel {
  sectionWheels: SectionWheels
  wheelId: string
  variation: string
  themeId?: string
}

export const getWheel = (params: GetWheel): Wheel | undefined => {
  const themeId = params.themeId || params.sectionWheels.defaultThemeId
  const theme = params.sectionWheels.themes[themeId]
  if (!theme) {
    console.log(`Warning: theme '${themeId}' not found`)
    return
  }
  const styles = theme.styles[params.wheelId]
  if (!styles) {
    console.log(`Warning: wheelId '${params.wheelId}' not found`)
    return
  }
  const style = styles[params.variation]
  if (!style) {
    console.log(
      `Warning: variation '${params.variation}' for wheelId '${params.wheelId}' not found`
    )
    return
  }
  const wheel: Wheel = {
    style,
    elementNcss: theme.elementNcss,
    wrSystemTheme: theme.wrSystemTheme,
    wrSystemConfig: params.sectionWheels.wrSystemConfig,
  }
  return wheel
}

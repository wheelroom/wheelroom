import { SectionWheels, SectionWheel } from './section-wheels'
import { Wheel } from './wheel'

export interface GetSectionWheel {
  sectionWheels: SectionWheels
  wheelId: string
  variation: string
  themeId?: string
}

export const getSectionWheel = (
  params: GetSectionWheel
): SectionWheel | undefined => {
  const themeId = params.themeId || params.sectionWheels.defaultThemeId
  const theme = params.sectionWheels.themes[themeId]
  if (!theme) {
    console.log(`Warning: theme '${themeId}' not found`)
    return
  }

  // Get the style for the section wheel
  const styles = theme.styles[params.wheelId]
  if (!styles) {
    console.log(`Warning: style for wheelId '${params.wheelId}' not found`)
    return
  }
  const style = styles[params.variation]
  if (!style) {
    console.log(
      `Warning: style variation '${params.variation}' for wheelId '${params.wheelId}' not found`
    )
    return
  }

  // Get the data for the section hweel
  const allData = theme.data[params.wheelId]
  if (!allData) {
    console.log(`Warning: data for wheelId '${params.wheelId}' not found`)
    return
  }
  const data = allData[params.variation]
  if (!data) {
    console.log(
      `Warning: data variation '${params.variation}' for wheelId '${params.wheelId}' not found`
    )
    return
  }

  const wheel: Wheel = {
    style,
    elementNcss: theme.elementNcss,
    wrSystemTheme: theme.wrSystemTheme,
    wrSystemConfig: params.sectionWheels.wrSystemConfig,
  }
  return {
    data,
    wheel,
  }
}

import { SectionWheels } from './section-wheels'

export interface GetSectionOptions {
  sectionWheels: SectionWheels
  wheelId: string
  variation: string
  themeId?: string
}

export const getSectionOptions = (
  params: GetSectionOptions
): any | undefined => {
  const themeId = params.themeId || params.sectionWheels.defaultThemeId
  const theme = params.sectionWheels.themes[themeId]
  if (!theme) {
    console.log(`Warning: theme '${themeId}' not found`)
    return
  }
  const options = theme.options[params.wheelId]
  if (!options) {
    console.log(`Warning: wheelId '${params.wheelId}' not found`)
    return
  }
  return options
}
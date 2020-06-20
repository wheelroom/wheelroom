import { styledSystemConfig } from '../../src-core'

export const sectionWheels: SectionWheels {
  defaultTheme: 'light',
  themes: {
    [themeId: string]: {
      elementStyles: ElementStyles
      wrSystemTheme: WrSystemTheme
      styles: {
        [wheelId: string]: {
          [variation: string]: any
        }
      }
    }
  }
  styledSystemConfig
}  

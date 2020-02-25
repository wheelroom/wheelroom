import { StyledSystemTheme } from '@jacco-meijer/styled-system'

export const styledSystemTheme: StyledSystemTheme = {
  breakpoints: ['37.5em', '50em', '75em'],
  colorMap: {
    black: '#000000',
    cyan: '#D7FFF1',
    darkGrey: '#434343',
    green: ' #86C2A1',
    mint: '#AAFCB8',
    white: ' #FFFFFF',
  },
  fontMap: {
    heading: 'Fjalla One, sans-serif',
    text: 'Open Sans, sans-serif',
  },
  fontSizeScale: [0, 12, 13, 15, 18, 22, 27, 33, 40, 48, 57, 67, 78, 90],
  fontWeightScale: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900],
  heightScale: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeightScale: [0, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2],
  spaceScale: [0, 4, 9, 15, 22, 30, 39, 49, 60, 72, 85],
}

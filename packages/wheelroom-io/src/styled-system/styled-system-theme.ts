import { StyledSystemTheme } from '@jacco-meijer/styled-system'

export const styledSystemTheme: StyledSystemTheme = {
  breakpoints: ['37.5em', '50em', '75em'],
  colorMap: {
    black: '#000000',
    white: '#FFFFFF',
    skyblue: 'rgba(35, 122, 252, 0.1)',
    azure: '#237AFC',
    amber: '#FCA623',
    silver: '#EEEEEE',
    metal: '#AAAAAA',
    bullet: '#666666',
    caviar: '#222222',
  },
  fontMap: {
    heading:
      '-apple-system, BlinkMacSystemFont, "Segoe UI" , Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
    text:
      '-apple-system, BlinkMacSystemFont, "Segoe UI" , Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
  },
  fontSizeScale: [0, 12, 14, 16, 18, 22, 27, 33, 40, 48, 57, 67, 78, 90],
  fontWeightScale: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900],
  heightScale: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeightScale: [0, 1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2],
  spaceScale: [0, 4, 9, 15, 22, 30, 39, 49, 60, 72, 85],
}

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
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    text:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  },
  fontSizeScale: [10, 12, 14, 16, 18, 20, 24, 32, 42, 56, 72],
  fontWeightScale: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  heightScale: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeightScale: [1, 1.15, 1.25, 1.5],
  spaceScale: [0, 4, 8, 16, 24, 32, 40, 48, 64, 72],
}

import { StyledSystemTheme } from '@jacco-meijer/styled-system'
import { scales } from '../scales'
import { maps } from '../maps'
import { breakpoints } from '../breakpoints'

export const darkTheme: StyledSystemTheme = {
  ...breakpoints,
  ...maps,
  ...scales,
  colorMap: {
    black: '#FFFFFF',
    white: '#000000',
    skyblue: 'rgba(35, 122, 252, 0.1)',
    azure: '#237AFC',
    amber: '#FCA623',
    silver: '#EEEEEE',
    metal: '#AAAAAA',
    bullet: '#666666',
    caviar: '#222222',
  },
}

import { NcssProps } from '../types'

export interface ButtonPreset {
  ncss: NcssProps
}

export const buttonPreset: ButtonPreset = {
  ncss: {
    boxSizing: 'border-box',
    fontFamily: 'text',
    textDecoration: 'none',
    userSelect: 'none',
    cursor: 'pointer',
    ':hover': {},
    ':visited': {},
    ':focus': {},
  },
}

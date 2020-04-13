import { NcssProps } from '../types'

export interface ButtonPreset {
  ncss: NcssProps
}

export const buttonPreset: ButtonPreset = {
  ncss: {
    label: 'button',
    boxSizing: 'border-box',
    fontFamily: 'systemFont',
    textDecoration: 'none',
    userSelect: 'none',
    cursor: 'pointer',
    ':hover': {},
    ':visited': {},
    ':focus': {},
  },
}

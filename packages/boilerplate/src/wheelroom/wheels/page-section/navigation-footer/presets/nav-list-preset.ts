import { NcssProps } from '../../../types'

export interface NavListPreset {
  list: { ncss: NcssProps }
  item: { ncss: NcssProps }
}

export const navListPreset: NavListPreset = {
  list: {
    ncss: {
      display: 'flex',
      flexDirection: 'row',
      listPreset: 'none',
      flexWrap: 'wrap',
      mb: 0,
      mt: 0,
      pl: 0,
    },
  },
  item: {
    ncss: {
      color: 'link',
      fontFamily: 'systemFont',
      fontSize: [3, 4],
      display: 'block',
      textDecoration: 'none',
      cursor: 'pointer',
      '&:hover': { textDecoration: 'underline' },
      '&:active': {},
      '&:focus': {},
    },
  },
}

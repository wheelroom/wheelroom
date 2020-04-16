import { NcssProps } from '../../../types'
import { GridPreset } from '../../../elements/grid-preset'
import { ALinkPreset } from '../../../elements/a-link-preset'

export interface LegalPreset {
  container: GridPreset
  any: NcssProps
  text: NcssProps
  link: ALinkPreset
}

export const legalPreset: LegalPreset = {
  container: {
    ncss: {
      borderTop: '1px solid black',
      minHeight: '48px',
      px: 3,
      /**
       * On iPhone this link will not be visible without the extra margin-bottom
       * */
      mb: [5, 0],
      alignItems: 'center',
      justifyContent: ['center', 'flex-end'],
    },
  },
  any: {
    ncss: {},
  },
  text: {
    ncss: {
      fontFamily: 'text',
    },
  },
  link: {
    ncss: {
      display: 'inline-flex',
    },
  },
}

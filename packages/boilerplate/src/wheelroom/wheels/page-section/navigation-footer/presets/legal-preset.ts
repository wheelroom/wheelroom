import { NcssProps } from '../../../types'
import { GridReset } from '../../../elements/grid-reset'
import { ALinkReset } from '../../../elements/a-link-reset'
import { ParagraphReset } from '../../../elements/paragraph-reset'

export interface LegalPreset {
  container: GridReset
  any: NcssProps
  text: NcssProps
  link: ALinkReset
  sup: ParagraphReset
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
      mb: [4, 0],
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
  sup: {
    ncss: {},
  },
}

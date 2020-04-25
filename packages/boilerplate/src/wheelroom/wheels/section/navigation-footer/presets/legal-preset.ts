import { NcssProps } from '../../../types'
import { ALinkElementStyle } from '../../../element/resets/a-link-reset'
import { ParagraphElementStyle } from '../../../element/resets/paragraph-reset'
import { GridElementStyle } from '../../../element/resets/grid-reset'

export interface LegalFooterWheelStyle {
  wrapper: GridElementStyle
  container: GridElementStyle
  legal: {
    ncss: NcssProps
    promise: {
      ncss: NcssProps
      link: ALinkElementStyle
      sup: ParagraphElementStyle
    }
  }
}

export const legalFooterPreset: LegalFooterWheelStyle = {
  wrapper: {
    ncss: {
      borderTop: '1px solid black',
      minHeight: '48px',
    },
  },
  container: {
    ncss: {
      px: 3,
    },
  },
  legal: {
    ncss: {
      label: 'legal',
      alignItems: 'center',
      justifyContent: ['center', 'flex-end'],
      w: 1,
    },
    promise: {
      ncss: {
        label: 'promise',
        /**
         * On iPhone this link will not be visible without the extra margin-bottom
         * */
        mb: [4, 0],
      },
      link: {
        ncss: {
          label: 'promise-link',
          display: 'inline-flex',
        },
      },
      sup: {
        ncss: {
          label: 'promise-sup',
        },
      },
    },
  },
}

import { NcssProps } from '../../../types'
import { ALinkElementStyle } from '../../../elements/resets/a-link-reset'
import { ParagraphElementStyle } from '../../../elements/resets/paragraph-reset'

export interface LegalWheelStyle {
  ncss: NcssProps
  promise: {
    ncss: NcssProps
    link: ALinkElementStyle
    sup: ParagraphElementStyle
  }
}

export const legalPreset: LegalWheelStyle = {
  ncss: {
    label: 'legal',
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
  promise: {
    ncss: {
      label: 'promise',
    },
    link: {
      ncss: {
        label: 'legal-link',
        display: 'inline-flex',
      },
    },
    sup: {
      ncss: {
        label: 'legal-sup',
      },
    },
  },
}

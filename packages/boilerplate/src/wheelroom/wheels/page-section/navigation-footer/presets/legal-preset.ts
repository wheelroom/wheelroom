import { NcssProps } from '../../../types'
import { ALinkReset } from '../../../elements/resets/a-link-reset'
import { ParagraphReset } from '../../../elements/resets/paragraph-reset'

export interface LegalPreset {
  ncss: NcssProps
  promise: {
    ncss: NcssProps
    link: ALinkReset
    sup: ParagraphReset
  }
}

export const legalPreset: LegalPreset = {
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

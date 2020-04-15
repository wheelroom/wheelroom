import { NcssProps } from '../../../types'

export interface LegalPreset {
  container: NcssProps
  innerContainer: { ncss: NcssProps }
  text: { ncss: NcssProps }
  link: { ncss: NcssProps }
}

export const legalPreset: LegalPreset = {
  container: {
    ncss: {
      borderTop: '1px solid transparent',
      borderColor: 'border',
      px: 3,
    },
  },
  innerContainer: {
    ncss: {
      h: '48px',
      w: 1,
      alignItems: 'center',
      justifyContent: ['center', 'normal'],
    },
  },
  text: { ncss: { fontFamily: 'text', color: 'silver' } },
  link: {
    ncss: {
      display: 'inline-flex',
      color: 'silver',
    },
  },
}

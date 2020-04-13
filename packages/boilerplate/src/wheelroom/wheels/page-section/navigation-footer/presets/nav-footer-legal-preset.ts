import { NcssProps } from '../../../types'

export interface NavFooterLegalPreset {
  container: { ncss: NcssProps }
  innerContainer: { ncss: NcssProps }
  text: { ncss: NcssProps }
  link: { ncss: NcssProps }
}

export const navLegalPreset: NavFooterLegalPreset = {
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
  text: { ncss: { fontFamily: 'text', color: 'metal' } },
  link: {
    ncss: {
      display: 'inline-flex',
      color: 'metal',
    },
  },
}

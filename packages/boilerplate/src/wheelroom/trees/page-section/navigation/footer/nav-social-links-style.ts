import { listStyle } from '../common/navigation-common-style'
import { NcssProps } from '../../../../elements/types'

export interface NavSocialLinksTreeStyle {
  list: NcssProps
  action: NcssProps
  icon: NcssProps
}

export const navSocialLinksStyle: NavSocialLinksTreeStyle = {
  list: listStyle,
  action: {
    display: 'inline-flex',
    p: 1,
  },
  icon: {
    width: '20px',
    height: '20px',
    color: 'metal',
    strokeWidth: '1px',
    ':hover': {
      color: 'text',
    },
  },
}

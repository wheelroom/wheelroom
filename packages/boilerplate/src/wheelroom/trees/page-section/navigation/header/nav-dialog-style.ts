import {
  buttonPrimaryStyle,
  buttonSecondaryStyle,
} from '../../../../../element-styles/button'
import { commonNavigationStyle } from '../common/navigation-common-style'
import {
  modalOpenStyle,
  modalStyle,
  modalContentOpenStyle,
  modalContentStyle,
} from './nav-dialog-modal-style'
import { NcssProps } from '../../../../elements/types'
import { NavListTreeStyle } from '../common/nav-list'

export interface NavDialogTreeStyle {
  container: {
    menuVisible: {
      yes: NcssProps
      no: NcssProps
    }
  }
  document: {
    menuVisible: {
      yes: NcssProps
      no: NcssProps
    }
  }
  closeMenuButton: NcssProps
  navList: NavListTreeStyle
  actions: {
    container: NcssProps
    action: NcssProps
    themeButton: NcssProps
  }
}

export const navDialogStyle: NavDialogTreeStyle = {
  container: { menuVisible: { yes: modalOpenStyle, no: modalStyle } },
  document: {
    menuVisible: { yes: modalContentOpenStyle, no: modalContentStyle },
  },
  closeMenuButton: {
    ...buttonPrimaryStyle,
    mt: 3,
    mr: 3,
    p: 1,
    w: '36px',
    h: '36px',
  },
  navList: {
    list: {
      display: 'flex',
      flex: '1',
      flexDirection: 'column',
      flexWrap: 'wrap',
      label: 'nav-list',
      listStyle: 'none',
      mb: 0,
      mt: 0,
      pl: 0,
      w: 1,
      li: {
        borderBottom: '1px solid transparent',
        borderColor: 'border',
        a: {
          p: 3,
        },
      },
    },

    listItem: {
      linkStyle: {
        ...commonNavigationStyle,
        m: 0,
        px: 2,
        py: 3,
      },
    },
  },
  actions: {
    container: { label: 'nav-settings', w: 1, p: 3 },
    action: { ...buttonPrimaryStyle, w: 1 },
    themeButton: {
      ...buttonSecondaryStyle,
      ml: 2,
      w: 1,
      textTransform: 'capitalize',
    },
  },
}

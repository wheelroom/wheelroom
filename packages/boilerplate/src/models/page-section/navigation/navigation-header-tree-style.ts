import { PageSectionNavigationHeaderTreeStyle } from '../../../core/trees/page-section/page-section-navigation-header-tree'
import {
  buttonPrimaryStyle,
  buttonSecondaryStyle,
} from '../../../element-styles/button'
import {
  commonNavigationStyle,
  listStyle,
  navStyle,
} from '../../../core/trees/navigation/navigation-common-style'
import {
  modalOpenStyle,
  modalStyle,
  modalContentOpenStyle,
  modalContentStyle,
} from '../../../core/trees/navigation/navigation-modal-style'

export const navigationHeaderTreeStyle: PageSectionNavigationHeaderTreeStyle = {
  skipToContent: {
    label: 'skip',
    position: 'absolute',
    left: '-100%',
    ':focus': {
      w: 1,
      left: 0,
      top: 0,
      right: 0,
      color: 'black',
      fontFamily: 'text',
      fontWeight: 5,
      backgroundColor: 'amber',
      textAlign: 'center',
      lineHeight: '70px',
      justifyContent: 'center',
      zIndex: 1002,
    },
  },
  wrapper: {
    label: 'wrapper',
    bg: 'bg',
    width: '100%',
    height: '70px',
    borderBottom: '1px solid',
    borderColor: 'border',
  },
  container: {
    label: 'container',
    height: '100%',
    justifyContent: 'space-between',
    px: 3,
  },
  menu: {
    nav: { ...navStyle, display: ['none', 'none', 'flex'] },
    navLogo: {
      container: {
        label: 'logo',
        alignItems: 'center',
      },
      link: {
        fontFamily: 'display',
        textDecoration: 'none',
        fontSize: [4, 5],
        fontWeight: 5,
        color: 'text',
        mr: 5,
        sup: {
          color: 'metal',
          fontWeight: 3,
        },
      },
    },
    navList: {
      list: { ...listStyle, flex: '1 1 auto' },
      listItem: {
        linkStyle: {
          ...commonNavigationStyle,
          m: 0,
          px: 2,
          py: 3,
        },
      },
    },
    navActions: {
      container: { label: 'nav-settings' },
      action: buttonPrimaryStyle,
      themeButton: {
        ...buttonSecondaryStyle,
        ml: 2,
        textTransform: 'capitalize',
        minWidth: '70px',
      },
    },
    modalDialog: {
      container: {
        label: 'modal-dialog',
        display: ['flex', 'flex', 'none'],
        flex: '1',
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
      openMenuButton: {
        ...buttonPrimaryStyle,
      },
      navDialog: {
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
      },
    },
  },
}

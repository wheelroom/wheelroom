import { NavigationHeaderWheelStyle } from '../../../../../../src-navigation-wheel'
import { wrapperStyle } from '../../shared-styles/grid-style'
import {
  primaryButtonStyle,
  secondaryButtonStyle,
} from '../../../element-styles/button-style'
import { iconButtonSmallStyle } from '../../shared-styles/icon-style'
import {
  modalDialogContentOpen,
  modalDialogContent,
  modalDialogOpen,
  modalDialog,
  modalDialogOverlayOpen,
  modalDialogOverlay,
} from '../modal/modal-dialog'
import { navigationSegment } from '../navigation-segment/navigation-segment'
import { deepMerge } from '../../../../../../src-core'

export const navigationSectionHeaderStyle: NavigationHeaderWheelStyle = {
  skipToContent: {
    ncss: {
      label: 'skip-to-content',
      position: 'absolute',
      left: '-100%',
      ':focus': {
        w: 1,
        minHeight: '70px',
        py: 4,
        px: 3,
        left: 0,
        top: 0,
        right: 0,
        textAlign: 'center',
        zIndex: 1002,
        outlineOffset: -2,
        outlineStyle: 'dotted',
        outlineWidth: 2,
        bg: 'skipToContentBg',
        color: 'skipToContentText',
        outlineColor: 'skipToContentOutline',
      },
    },
  },
  wrapper: {
    ncss: {
      width: 1,
      height: '70px',
      py: 0,
      borderBottom: '1px solid transparent',
      borderColor: 'sectionBorder',
      ...wrapperStyle.ncss,
    },
  },
  container: {
    ncss: {
      height: '100%',
      justifyContent: 'space-between',
      px: 3,
    },
  },
  brand: {
    segment: {
      ncss: {
        label: 'brand-navigation-segment',
        alignItems: 'center',
        mr: 3,
      },
      logo: {
        ncss: {
          label: 'brand-navigation-segment-logo',
        },
      },
      action: {
        ncss: {
          label: 'brand-navigation-segment-action',
          display: 'inline-flex',
          fontFamily: 'branding',
          fontWeight: 'bold',
          textDecoration: 'none',
          color: 'sectionText',
          ':focus': {
            outlineColor: 'outline',
          },
        },
        icon: {
          ncss: {
            label: 'brand-navigation-segment-action-icon',
            ...iconButtonSmallStyle.ncss,
          },
        },
      },
    },
  },
  menu: {
    ncss: {
      label: 'menu-navigation',
      flex: '1',
      alignItems: 'center',
      display: ['none', 'none', 'flex'],
    },
    segment: deepMerge([
      navigationSegment,
      {
        action: {
          ncss: {
            textDecoration: 'none',
            px: 2,
            py: 3,
            ':hover, &.active': {
              textDecoration: 'underline',
            },
          },
        },
      },
    ]),
  },
  actions: {
    ncss: {
      label: 'actions-navigation',
      alignItems: 'center',
      display: ['none', 'none', 'flex'],
      mx: -1,
    },
    segment: deepMerge([
      navigationSegment,
      {
        action: {
          ncss: {
            ...primaryButtonStyle.ncss,
            m: 1,
            w: 1,
          },
          icon: iconButtonSmallStyle,
        },
      },
    ]),
    themeButton: {
      ncss: {
        label: 'actions-theme-button',
        ...secondaryButtonStyle.ncss,
        m: 1,
      },
    },
  },
  modal: {
    ncss: {
      label: 'modal',
      display: ['flex', 'flex', 'none'],
      alignItems: 'center',
    },
    button: {
      ncss: {},
    },
    dialog: {
      container: {
        visible: {
          ncss: {
            ...modalDialogOpen.ncss,
            label: 'modal-is-visible',
          },
        },
        hidden: {
          ncss: {
            ...modalDialog.ncss,
            label: 'modal-is-hidden',
          },
        },
      },
      overlay: {
        visible: {
          ncss: {
            ...modalDialogOverlayOpen.ncss,
            label: 'before-is-visible',
          },
        },
        hidden: {
          ncss: {},
          ...modalDialogOverlay.ncss,
          label: 'before-is-hidden',
        },
      },
      document: {
        ncss: {},
        visible: {
          ncss: {
            ...modalDialogContentOpen.ncss,
            label: 'document-is-visible',
            bg: 'modalBg',
            borderColor: 'modalBorder',
            borderRadius: 4,
            boxShadow: '0 0 16px',
            color: 'modalShadow',
          },
        },
        hidden: {
          ncss: {
            ...modalDialogContent.ncss,
            label: 'document-is-hidden',
          },
        },
        closeNavigationButton: {
          ncss: {
            label: 'modal-close-button',
            mt: 3,
            mr: 3,
            p: 1,
            w: '36px',
            h: '36px',
          },
          icon: {
            ncss: {
              w: '26px',
              h: '26px',
              color: 'white',
            },
          },
        },
        menu: {
          ncss: {
            label: 'menu-navigation',
            w: 1,
          },
          segment: deepMerge([
            navigationSegment,
            {
              list: {
                ncss: {
                  flexDirection: 'column',
                  w: 1,
                },
              },
              item: {
                ncss: {
                  borderBottom: '1px solid transparent',
                  borderColor: 'sectionBorder',
                  w: 1,
                },
              },
              action: {
                ncss: {
                  textDecoration: 'none',
                  px: 2,
                  py: 3,
                  w: 1,
                  ':hover, &.active': {
                    textDecoration: 'underline',
                  },
                  ':focus': {
                    outlineColor: 'outline',
                    outlineOffset: -2,
                  },
                },
                icon: {
                  ncss: {},
                },
              },
            },
          ]),
        },
        actions: {
          ncss: {
            label: 'actions-navigation',
            flexDirection: 'column',
            w: 1,
            p: 1,
          },
          segment: deepMerge([
            navigationSegment,
            {
              list: {
                ncss: {
                  w: 1,
                  alignItems: 'center',
                },
              },
              item: {
                ncss: {
                  w: 1,
                },
              },
              action: {
                ncss: {
                  ...primaryButtonStyle.ncss,
                  m: 1,
                  w: 1,
                },
                icon: {
                  ncss: {
                    ...iconButtonSmallStyle.ncss,
                  },
                },
              },
            },
          ]),
          themeButton: {
            ncss: {
              label: 'modal-theme-button',
              ...secondaryButtonStyle.ncss,
              m: 1,
            },
          },
        },
      },
    },
  },
}

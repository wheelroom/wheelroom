import { deepMerge, DeepPartial } from '../../../../../../src-core'
import { NavigationSectionHeaderModelNcssTree } from '../../../../../../src-navigation-wheel'
import { wrapperNcssNode } from '../../grid-ncss'
import {
  primaryButtonNcssNode,
  secondaryButtonNcssNode,
} from '../../../element-ncss/button-ncss'
import { iconButtonSmallNcssNode } from '../../icon-ncss'
import {
  dialogContentIsVisible,
  dialogContent,
  dialogIsVisible,
  dialogNcss,
  dialogOverlayIsVisible,
  dialogOverlay,
} from '../modal/dialog-ncss'
import { navigationSegmentNcssTree } from '../navigation-segment/navigation-segment-ncss-tree'

export const navigationSectionHeaderNcssTree: DeepPartial<NavigationSectionHeaderModelNcssTree> = {
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
  container: {
    ncss: {
      label: 'navigation-header-container',
      height: '100%',
      justifyContent: 'space-between',
      px: 3,
    },
  },
  header: {
    brand: {
      ncss: {
        label: 'brand-navigation',
        alignItems: 'center',
      },
      segment: {
        ncss: {
          label: 'brand-navigation-segment',
          display: 'inline-flex',
          mr: 3,
        },
        branding: {
          ncss: {
            label: 'brand-navigation-segment-brand',
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
          icon: iconButtonSmallNcssNode,
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
        navigationSegmentNcssTree,
        {
          ncss: {
            label: 'menu-navigation-segment',
          },
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
        navigationSegmentNcssTree,
        {
          ncss: {
            label: 'menu-navigation-actions',
          },
          action: {
            ncss: {
              ...primaryButtonNcssNode.ncss,
              m: 1,
              w: 1,
            },
            icon: iconButtonSmallNcssNode,
          },
        },
      ]),
      themeButton: {
        ncss: {
          ...secondaryButtonNcssNode.ncss,
          label: 'actions-theme-button',
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
      menuButton: {
        ncss: {},
      },
      dialog: {
        ncssSwitch: {
          visible: {
            ...dialogIsVisible.ncss,
            label: 'modal-is-visible',
          },
          hidden: {
            ...dialogNcss.ncss,
            label: 'modal-is-hidden',
          },
        },
        overlay: {
          ncssSwitch: {
            visible: {
              ...dialogOverlayIsVisible.ncss,
              label: 'before-is-visible',
            },
            hidden: {
              ...dialogOverlay.ncss,
              label: 'before-is-hidden',
            },
          },
        },
        document: {
          ncssSwitch: {
            visible: {
              ...dialogContentIsVisible.ncss,
              label: 'document-is-visible',
              bg: 'modalBg',
              borderColor: 'modalBorder',
              borderRadius: 4,
              boxShadow: '0 0 16px',
              color: 'modalShadow',
            },
            hidden: {
              ...dialogContent.ncss,
              label: 'document-is-hidden',
            },
          },
        },
        closeButton: {
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
            navigationSegmentNcssTree,
            {
              ncss: {
                label: 'menu-navigation-segment',
              },
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
            navigationSegmentNcssTree,
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
                  ...primaryButtonNcssNode.ncss,
                  m: 1,
                  w: 1,
                },
                icon: iconButtonSmallNcssNode,
              },
            },
          ]),
          themeButton: {
            ncss: {
              ...secondaryButtonNcssNode.ncss,
              label: 'modal-theme-button',
              m: 1,
            },
          },
        },
      },
    },
  },
  wrapper: deepMerge([
    wrapperNcssNode,
    {
      ncss: {
        width: 1,
        height: '70px',
        borderBottom: '1px solid transparent',
        borderColor: 'sectionBorder',
      },
    },
  ]),
}

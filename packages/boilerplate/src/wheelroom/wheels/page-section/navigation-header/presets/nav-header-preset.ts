import { NcssProps } from '../../../types'
import { GridPreset } from '../../../elements/grid-preset'
import { BrandingPreset, brandingPreset } from './branding-preset'
import {
  NavHeaderActionsPreset,
  navHeaderActionsPreset,
} from './nav-header-actions-preset'
import { ModalPreset, modalPreset } from './modal-preset'

import {
  NavHeaderListPreset,
  navHeaderListPreset,
} from './nav-header-list-preset'
import { ButtonPreset } from '../../../elements/button-preset'

export interface NavHeaderPreset {
  skipToContent: { ncss: NcssProps }
  wrapper: GridPreset
  container: GridPreset
  branding: BrandingPreset
  navHeader: {
    ncss: NcssProps
    list: NavHeaderListPreset
    actions: NavHeaderActionsPreset
  }
  modal: {
    ncss: NcssProps
    button: ButtonPreset
    dialog: ModalPreset
  }
}

export const navHeaderPreset: NavHeaderPreset = {
  skipToContent: {
    ncss: {
      label: 'skip-to-content',
      position: 'absolute',
      left: '-100%',
      ':focus': {
        w: 1,
        py: 4,
        px: 3,
        left: 0,
        top: 0,
        right: 0,
        fontFamily: 'text',
        fontWeight: 7,
        backgroundColor: '#FCA623',
        textAlign: 'center',
        zIndex: 1002,
        border: '2px dotted black',
        outline: 'none',
      },
    },
  },
  wrapper: {
    ncss: {
      width: 1,
      height: '70px',
      py: 0,
      borderBottom: '1px solid black',
    },
  },
  container: {
    ncss: {
      height: '100%',
      justifyContent: 'space-between',
      px: 3,
    },
  },
  branding: brandingPreset,
  navHeader: {
    ncss: {
      label: 'nav-header',
      flex: '1',
      alignItems: 'center',
      display: ['none', 'none', 'flex'],
    },
    list: navHeaderListPreset,
    actions: navHeaderActionsPreset,
  },
  modal: {
    ncss: {
      label: 'modal',
      display: ['flex', 'flex', 'none'],
    },
    button: {
      ncss: {},
    },
    dialog: modalPreset,
  },
}

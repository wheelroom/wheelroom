import { LogoPreset, logoPreset } from './logo-preset'
import {
  NavHeaderActionsPreset,
  navHeaderActionsPreset,
} from './nav-header-actions-preset'
import { ModalPreset, modalPreset } from './modal-preset'
import { NcssProps } from '../../../types'
import {
  NavHeaderListPreset,
  navHeaderListPreset,
} from './nav-header-list-preset'
import { buttonPreset } from '../../../elements/button-preset'

export interface NavHeaderPreset {
  skipToContent: { ncss: NcssProps }
  wrapper: { ncss: NcssProps }
  container: { ncss: NcssProps }
  logo: LogoPreset
  navHeader: {
    ncss: NcssProps
    list: NavHeaderListPreset
    actions: NavHeaderActionsPreset
  }
  modal: {
    ncss: NcssProps
    button: NcssProps
    dialog: ModalPreset
  }
}

export const navHeaderPreset: NavHeaderPreset = {
  skipToContent: {
    ncss: {
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
  },
  wrapper: {
    ncss: {
      bg: 'bg',
      width: '100%',
      height: '70px',
      borderBottom: '1px solid',
      borderColor: 'border',
    },
  },
  container: {
    ncss: {
      height: '100%',
      justifyContent: 'space-between',
      px: 3,
    },
  },
  logo: logoPreset,
  navHeader: {
    ncss: {
      flex: '1',
      alignItems: 'center',
      display: ['none', 'none', 'flex'],
    },
    list: navHeaderListPreset,
    actions: navHeaderActionsPreset,
  },
  modal: {
    ncss: {},
    button: buttonPreset,
    dialog: modalPreset,
  },
}

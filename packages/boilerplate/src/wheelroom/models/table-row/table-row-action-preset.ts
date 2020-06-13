import { NcssProps } from '../../types/wheel'

export interface TableRowActionWheelStyle {
  ncss: NcssProps
  icon: {
    ncss: NcssProps
  }
}

export const tableRowActionPreset: TableRowActionWheelStyle = {
  ncss: {
    label: 'table-row-action',
    display: 'inline-flex',
    m: 1,
  },
  icon: {
    ncss: {
      label: 'table-row-icon',
      w: '15px',
      h: '15px',
      my: 'auto',
      transform: 'translateX(4px)',
    },
  },
}

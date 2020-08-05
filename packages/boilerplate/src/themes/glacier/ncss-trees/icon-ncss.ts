import { NcssNode } from '@wheelroom/core'

const iconNcss = {
  color: 'iconColor',
  strokeWidth: '1px',
}

const iconLargeNcss = {
  w: ['17px', '17px', '20px'],
  h: ['17px', '17px', '20px'],
}

export const iconSmallNcss = {
  w: '14px',
  h: '14px',
}

export const iconButtonSmallNcssNode: NcssNode = {
  ncss: {
    ...iconSmallNcss,
    m: 'auto',
    transform: 'translateX(4px)',
  },
}

export const iconButtonNcssNode: NcssNode = {
  ncss: {
    ...iconNcss,
    ...iconLargeNcss,
    m: 'auto',
    transform: ['translateX(8px)', 'translateX(8px)', 'translateX(10px)'],
  },
}

export const iconTopicNcssNode: NcssNode = {
  ncss: {
    ...iconNcss,
    mb: 2,
  },
}

export const iconSmallTopicNcssNode: NcssNode = {
  ncss: {
    ...iconNcss,
    ...iconSmallNcss,
  },
}

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
  w: '16px',
  h: '16px',
}

export const iconButtonSmallNcssNode: NcssNode = {
  ncss: {
    ...iconSmallNcss,
    transform: 'translateX(4px)',
  },
}

export const iconButtonNcssNode: NcssNode = {
  ncss: {
    ...iconNcss,
    ...iconLargeNcss,
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

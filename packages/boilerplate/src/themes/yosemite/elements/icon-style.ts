const iconStyle = {
  ncss: {
    color: 'iconColor',
    strokeWidth: '1px',
  },
}

const iconLargeStyle = {
  ncss: {
    w: ['17px', '17px', '20px'],
    h: ['17px', '17px', '20px'],
  },
}

const iconSmallStyle = {
  ncss: {
    w: '16px',
    h: '16px',
  },
}

export const iconButtonSmallStyle = {
  ncss: {
    ...iconSmallStyle.ncss,
    transform: 'translateX(4px)',
  },
}

export const iconButtonStyle = {
  ncss: {
    ...iconStyle.ncss,
    ...iconLargeStyle.ncss,
    transform: ['translateX(8px)', 'translateX(8px)', 'translateX(10px)'],
  },
}

export const iconTopicStyle = {
  ncss: {
    ...iconStyle.ncss,
    mb: 2,
  },
}

export const iconSmallTopicStyle = {
  ncss: {
    ...iconStyle.ncss,
    ...iconSmallStyle.ncss,
  },
}

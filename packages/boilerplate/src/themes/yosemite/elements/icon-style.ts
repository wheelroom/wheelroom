const iconStyle = {
  ncss: {
    color: 'iconColor',
    strokeWidth: '1px',
  },
}

const iconSmallStyle = {
  ncss: {
    w: '23px',
    h: '23px',
  },
}

export const iconButtonStyle = {
  ncss: {
    ...iconSmallStyle.ncss,
    transform: 'translateX(10px)',
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

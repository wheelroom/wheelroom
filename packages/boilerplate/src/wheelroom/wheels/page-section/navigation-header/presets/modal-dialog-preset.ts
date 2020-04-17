export const modalDialogOverlayPreset = {
  ncss: {
    content: '""',
    height: 1,
    width: 1,
    bg: 'rgba(0, 0, 0, .5)',
    position: 'fixed',
    zIndex: -1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0,
    transition: 'opacity 0s ease',
  },
}

export const modalDialogOverlayOpenPreset = {
  ncss: {
    ...modalDialogOverlayPreset.ncss,
    opacity: 1,
    transition: 'opacity 2s ease',
  },
}

export const modalDialogPreset = {
  ncss: {
    position: 'fixed',
    display: 'flex',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    w: 1,
    height: 1,
    zIndex: 1050,
    justifyContent: 'flex-end',
    visibility: 'hidden',
  },
}

export const modalDialogOpenPreset = {
  ncss: {
    ...modalDialogPreset.ncss,
    visibility: 'visible',
    overflowY: 'auto',
  },
}

export const modalDialogContentPreset = {
  ncss: {
    w: [1, '360px'],
    m: 3,
    h: 'fit-content',
    bg: 'white',
    border: '1px solid black',
    overflow: 'hidden',
    flexDirection: 'column',
    alignItems: 'flex-end',
    opacity: 0,
    transform: 'scale(0)',
    transition: 'transform .1s ease 0s, opacity .1s ease 0s',
  },
}

export const modalDialogContentOpenPreset = {
  ncss: {
    ...modalDialogContentPreset.ncss,
    transform: 'scale(1)',
    opacity: 1,
    transition:
      'transform .35s cubic-bezier(.8,-.4,.2,1.44) 0s, opacity .35s cubic-bezier(.8,-.4,.2,1.44) 0s',
  },
}

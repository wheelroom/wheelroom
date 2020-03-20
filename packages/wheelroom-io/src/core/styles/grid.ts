export const commonBoxStyle = {
  boxSizing: 'border-box',
}
export const commonFlexStyle = {
  ...commonBoxStyle,
  display: 'flex',
}

export const commonContainerStyle = {
  ...commonFlexStyle,
  label: 'Container',
  mx: 'auto',
  my: '0',
  px: 3,
}

export const commonContainerMaxWidthStyle = {
  ...commonFlexStyle,
  label: 'container-max-width',
  maxWidth: '1280px',
  mx: 'auto',
  my: '0',
  px: [2, 5, 7],
  w: 1,
}

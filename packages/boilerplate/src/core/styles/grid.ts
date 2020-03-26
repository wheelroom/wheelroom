export const commonBoxStyle = {
  boxSizing: 'border-box',
}
export const commonFlexStyle = {
  ...commonBoxStyle,
  display: 'flex',
}

export const commonContainerStyle = {
  ...commonFlexStyle,
  label: 'container-fluid',
  mx: 'auto',
  my: '0',
  w: 1,
}

export const commonContainerMaxWidthStyle = {
  ...commonContainerStyle,
  label: 'container-max-width',
  maxWidth: '1280px',
}

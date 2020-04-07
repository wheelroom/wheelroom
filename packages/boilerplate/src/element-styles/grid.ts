export const defaultBoxStyle = {
  boxSizing: 'border-box',
}
export const defaultFlexStyle = {
  ...defaultBoxStyle,
  display: 'flex',
}

export const defaultContainerStyle = {
  ...defaultFlexStyle,
  label: 'container-fluid',
  mx: 'auto',
  my: '0',
  w: 1,
}

export const defaultContainerMaxWidthStyle = {
  ...defaultContainerStyle,
  label: 'container-max-width',
  maxWidth: '1280px',
}

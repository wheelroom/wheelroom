export const boxPreset = {
  label: 'box',
  boxSizing: 'border-box',
}

export const flexPreset = {
  ...boxPreset,
  label: 'flex',
  display: 'flex',
}

export const containerPreset = {
  ...flexPreset,
  label: 'container-fluid',
  w: 1,
}

export const containerMaxWidthPreset = {
  ...containerPreset,
  label: 'container-max-width',
  maxWidth: '1280px',
  mx: 'auto',
}

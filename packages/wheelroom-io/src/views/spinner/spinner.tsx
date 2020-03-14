import React from 'react'
import { Box } from '../../core/elements/grid'

export const Spinner = () => {
  const spinnerStyle = {
    animation: 'spin 0.5s linear infinite',
    borderColor: 'mint',
    borderRadius: '50%',
    borderStyle: 'solid',
    borderTopColor: 'green',
    borderTopStyle: 'solid',
    borderTopWidth: '8px',
    borderWidth: '8px',
    display: 'inline-block',
    height: '40px',
    width: '40px',

    '@keyframes spin': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg) }' },
    },
  }
  return <Box ncss={spinnerStyle}></Box>
}

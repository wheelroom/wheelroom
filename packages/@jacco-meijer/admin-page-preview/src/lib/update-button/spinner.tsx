/** @jsx jsx */
import { jsx } from '@emotion/core'

export const Spinner = () => {
  const spinnerStyle = {
    animation: 'spin 0.5s linear infinite',
    borderColor: '#ccc',
    borderRadius: '50%',
    borderTopColor: '#555',
    borderStyle: 'solid',
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
  return <div css={spinnerStyle}></div>
}

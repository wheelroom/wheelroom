/** @jsx jsx */
import { jsx } from '@emotion/core'

export const Spinner = () => {
  const spinnerStyle = {
    animation: 'spin 0.5s linear infinite',
    borderColor: '#ccc',
    borderRadius: '50%',
    borderTopColor: '#555',
    borderStyle: 'solid',
    borderTopWidth: '4px',
    borderWidth: '4px',
    display: 'inline-block',
    height: '30px',
    width: '30px',

    '@keyframes spin': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg) }' },
    },
  }
  return <div css={spinnerStyle}></div>
}

/** @jsx jsx */
import { jsx } from '@emotion/core'

export const Spinner = () => {
  const spinnerStyle = {
    animation: 'spin .75s linear infinite',
    borderColor: 'rgba(0,0,0,0.3)',
    borderRadius: '50%',
    borderTopColor: 'white',
    borderStyle: 'solid',
    borderTopWidth: '2px',
    borderWidth: '2px',
    display: 'inline-block',
    height: '24px',
    width: '24px',
    '@keyframes spin': {
      '0%': { transform: 'rotate(0deg)' },
      '100%': { transform: 'rotate(360deg) }' },
    },
  }
  return <div css={spinnerStyle}></div>
}

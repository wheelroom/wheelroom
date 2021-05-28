import { CSSObject } from '@emotion/react'
import { Div } from '@wheelroom/any/elements'

interface FactoryStyle {
  status: 'active' | 'inactive'
}

const factoryStyle = ({ status }: FactoryStyle) =>
  [
    status === 'active' && {
      alignItems: 'center',
      color: 'var(--color-primary-500)',
      display: 'inline-flex',
      fontFamily: 'var(--font-family-text)',
      fontSize: 16,
      marginBottom: 4,
      marginTop: 4,
    },
    {
      color: 'blue',
    },
  ] as CSSObject[]

interface AnyElementProps {
  status: 'active' | 'inactive'
}

export const AnyElement = ({ status }: AnyElementProps) => (
  <Div css={factoryStyle({ status })}>Any Element</Div>
)

import { AnyProps, Div } from '@wheelroom/any/react'
import { StyleFactory } from '../../lib/style-factory'

type GridVariant = 'header' | 'pancake' | 'sidebar'

type AnyDivProps = AnyProps['div']
export interface GridProps extends AnyDivProps {
  variant?: GridVariant
}

const baseGridStyle = {
  display: 'grid',
}

// Added for header variant
const headerVariantStyle = {
  gridTemplateRows: 'auto 1fr',
}

// Added for pancake variant
const pancakeVariantStyle = {
  gridTemplateRows: 'auto 1fr auto',
}

// Added for sidebar variant
const sidebarVariantStyle = {
  gridTemplateColumns: 'auto 1fr',
}

export const gridStyleFactory: StyleFactory<GridVariant> = (args) => {
  return [
    baseGridStyle,
    args.variant === 'header' && headerVariantStyle,
    args.variant === 'pancake' && pancakeVariantStyle,
    args.variant === 'sidebar' && sidebarVariantStyle,
  ]
}

export const Grid = ({ variant, ...props }: GridProps) => {
  const css = gridStyleFactory({
    variant,
  })
  return <Div css={css} {...props} />
}

import { Div } from '@wheelroom/any/react'
import { ComponentProps, StyleFactory } from '../../lib/component-styles'

export type GridVariant = 'header' | 'pancake' | 'sidebar'
export type GridProps = ComponentProps<undefined, GridVariant>['h1']

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

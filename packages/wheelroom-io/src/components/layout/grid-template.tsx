import { Div } from '@wheelroom/any/react'
import {
  ComponentProps,
  StyleFactory,
  StyleMap,
  StyleObject,
} from '../../lib/component-styles'
import { mediaQuery } from '../../lib/media-query'

export type GridTemplateVariant = 'sidebar' | 'pancake'
export type GridTemplateProps = ComponentProps<
  undefined,
  GridTemplateVariant,
  undefined
>['div']

const gridTemplateStyle: StyleObject = {
  display: 'grid',
  /* Only using `auto` OR `1fr` causing styling issues. Fix: Add minimum width of 0 */
  gridTemplateRows: 'minmax(70px, auto) minmax(0, 1fr) minmax(70px, auto)',
}

const sidebarVariantStyle: StyleObject = {
  ...gridTemplateStyle,
  gridTemplateAreas: `"aside header" "aside main" "aside footer"`,
  gridTemplateColumns: '400px 1fr',
  minHeight: '100vh',
}

const pancakeVariantStyle: StyleObject = {
  ...gridTemplateStyle,
  gridTemplateAreas: `"header" "main" "footer"`,
}

const styleMap: StyleMap<GridTemplateVariant> = {
  sidebar: sidebarVariantStyle,
  pancake: pancakeVariantStyle,
}

const gridTemplateStyleFactory: StyleFactory<GridTemplateVariant, undefined> = (
  args
) => {
  const useVariant = args.variant || 'pancake'
  const baseGridTemplateStyle = styleMap[useVariant]
  return mediaQuery([baseGridTemplateStyle])
}

export const GridTemplate = ({ variant, ...props }: GridTemplateProps) => {
  const css = gridTemplateStyleFactory({
    variant,
  })
  return <Div css={css} {...props} />
}

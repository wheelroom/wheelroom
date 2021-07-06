import { Div } from '@wheelroom/any/react'
import {
  ComponentProps,
  StyleFactory,
  StyleMap,
  StyleObject,
} from '../../lib/component-styles'
import { mediaQuery } from '../../lib/media-query'

export type GridSectionVariant = 'column' | 'topic'
export type GridSectionProps = ComponentProps<
  undefined,
  GridSectionVariant,
  undefined
>['div']

const gridSectionStyle: StyleObject = {
  display: 'grid',
}

const columnVariantStyle: StyleObject = {
  ...gridSectionStyle,
  gridTemplateColumns: 'minmax(calc(100% / 12), 1fr)',
}

const topicVariantStyle: StyleObject = {
  ...gridSectionStyle,
  gridSectionAreas: `"media" "content"`,
  /* Only using `auto` OR `1fr` causing styling issues. Fix: Add minimum width of 0 */
  gridSectionRows: 'minmax(0, auto) minmax(0, 1fr)',
}

const styleMap: StyleMap<GridSectionVariant> = {
  column: columnVariantStyle,
  topic: topicVariantStyle,
}

const gridSectionStyleFactory: StyleFactory<GridSectionVariant, undefined> = (
  args
) => {
  const useVariant = args.variant || 'column'
  const baseGridSectionStyle = styleMap[useVariant]
  return mediaQuery([baseGridSectionStyle])
}

export const GridSection = ({ variant, ...props }: GridSectionProps) => {
  const css = gridSectionStyleFactory({
    variant,
  })
  return <Div css={css} {...props} />
}

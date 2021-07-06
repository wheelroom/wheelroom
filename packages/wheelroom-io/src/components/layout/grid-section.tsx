import { Div } from '@wheelroom/any/react'
import {
  ComponentProps,
  StyleFactory,
  StyleMap,
  StyleObject,
} from '../../lib/component-styles'
import { mediaQuery } from '../../lib/media-query'

export type GridSectionVariant = 'topic'
export type GridSectionProps = ComponentProps<
  undefined,
  GridSectionVariant,
  undefined
>['div']

const topicVariantStyle: StyleObject = {
  display: 'grid',
  // Universal fluid and max-width with CSS grid
  gridTemplateColumns:
    '[page-start] 1fr [section] minmax(auto, 1280px) 1fr [page-end]',
}

const styleMap: StyleMap<GridSectionVariant> = {
  topic: topicVariantStyle,
}

const gridSectionStyleFactory: StyleFactory<GridSectionVariant, undefined> = (
  args
) => {
  const useVariant = args.variant || 'topic'
  const baseGridSectionStyle = styleMap[useVariant]
  return mediaQuery([baseGridSectionStyle])
}

export const GridSection = ({ variant, ...props }: GridSectionProps) => {
  const css = gridSectionStyleFactory({
    variant,
  })
  return <Div css={css} {...props} />
}

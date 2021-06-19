import { AnyProps, Div } from '@wheelroom/any/react'
import { ContentfulNavigationSegment } from './contentful-navigation-segment'

export interface NavigationSegment {
  contentfulNavigationSegment?: ContentfulNavigationSegment
}

type AnyDivProps = AnyProps['div']
export interface NavigationSegmentProps extends AnyDivProps {
  model?: NavigationSegment
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const navigationSegmentStyleFactory = (args: {
  variant?: any
  options?: any
}) => {
  return {}
}

export const NavigationSegment = ({
  model,
  ...props
}: NavigationSegmentProps) => {
  if (!model?.contentfulNavigationSegment?.actions?.items?.length) return null
  const css = navigationSegmentStyleFactory({})

  return (
    <Div css={css} {...props}>
      Navigation Segment Hoi
    </Div>
  )
}

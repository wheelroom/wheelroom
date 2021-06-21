import { AnyProps, Div, H3, H4 } from '@wheelroom/any/react'
import { NavigationSegment } from './navigation-segment'
import { ContentfulNavigationSection } from './contentful-navigation-section'

export interface NavigationHeader {
  contentfulNavigationSection?: ContentfulNavigationSection
}

type AnyDivProps = AnyProps['div']
export interface NavigationHeaderProps extends AnyDivProps {
  model?: NavigationHeader
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const navigationHeaderStyleFactory = (args: {
  variant?: any
  options?: any
}) => {
  return {}
}

export const NavigationHeader = ({
  model,
  ...props
}: NavigationHeaderProps) => {
  const section = model?.contentfulNavigationSection
  if (!section?.headerCollection?.items?.length) return null
  const css = navigationHeaderStyleFactory({})

  return (
    <Div css={css} {...props}>
      <Div>
        <NavigationSegment
          model={{
            contentfulNavigationSegment: section?.headerCollection?.items[0],
          }}
        />
      </Div>
      <Div>
        <NavigationSegment
          model={{
            contentfulNavigationSegment: section?.actions,
          }}
          variant="actions"
        />
      </Div>
      <Div>
        <NavigationSegment
          model={{
            contentfulNavigationSegment: section?.social,
          }}
        />
      </Div>
    </Div>
  )
}

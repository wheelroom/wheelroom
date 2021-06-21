import { AnyProps, Div } from '@wheelroom/any/react'
import { StyleFactory } from '../../lib/style-factory'
import { ContentfulNavigationSection } from './contentful-navigation-section'
import { NavigationActions } from './navigation-actions'
import { NavigationMenu } from './navigation-menu'
import { NavigationSocial } from './navigation-social'

export interface NavigationHeader {
  contentfulNavigationSection?: ContentfulNavigationSection
}

type AnyDivProps = AnyProps['div']
export interface NavigationHeaderProps extends AnyDivProps {
  model?: NavigationHeader
}

export const navigationHeaderStyleFactory: StyleFactory = () => {
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
      <NavigationMenu
        model={{
          contentfulNavigationSegment: section?.headerCollection?.items[0],
        }}
      />
      <NavigationActions
        model={{
          contentfulNavigationSegment: section?.actions,
        }}
      />
      <NavigationSocial
        model={{
          contentfulNavigationSegment: section?.social,
        }}
      />
    </Div>
  )
}

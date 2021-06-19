import { NavigationSegmentModel } from '../navigation-segment/model'
import { NavigationModel } from './model'

export const getNavSegments = (
  navigation: NavigationModel[],
  variation: string
) => {
  const nav = navigation.find(
    (nav: NavigationModel) => nav.variation === variation
  )
  if (!nav || !nav.segments || !Array.isArray(nav.segments)) {
    return [] as NavigationSegmentModel[]
  }
  return nav.segments
}

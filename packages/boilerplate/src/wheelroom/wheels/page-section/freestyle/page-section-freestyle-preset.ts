import { GridPreset } from '../../elements/grid-preset'
import { TextPreset, textPreset } from '../../text/text-preset'

export interface PageSectionFreestylePreset {
  container: GridPreset
  text: TextPreset
  wrapper: GridPreset
}

export const pageSectionFreestylePreset: PageSectionFreestylePreset = {
  container: {
    ncss: {},
  },
  text: textPreset,
  wrapper: {
    ncss: {},
  },
}

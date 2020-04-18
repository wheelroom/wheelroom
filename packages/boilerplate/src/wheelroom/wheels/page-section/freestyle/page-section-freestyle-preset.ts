import { GridElementStyle } from '../../elements/resets/grid-reset'
import { TextPreset, textPreset } from '../../text/text-preset'

export interface PageSectionFreestylePreset {
  container: GridElementStyle
  text: TextPreset
  wrapper: GridElementStyle
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

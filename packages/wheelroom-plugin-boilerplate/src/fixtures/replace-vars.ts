import { WheelroomComponent } from '@wheelroom/wheelroom'
import { ReplaceVarsExt } from '../types/parser'

const componentA = {
  fields: {
    __typename: {
      system: true,
      type: 'shortText',
    },
    someText: {
      initialContent: 'testing-this-here',
      localized: false,
      required: false,
      type: 'shortText',
    },
    title: {
      helpText: 'Never displayed, only used for listing within Contentful',
      localized: false,
      required: true,
      type: 'shortText',
    },
  },
  modelVersion: '1.0.0',
  settings: {
    asFragment: false,
    asPageSection: false,
  },
} as WheelroomComponent

export const replaceVars: ReplaceVarsExt = {
  component: componentA,
  componentName: 'exampleBlock',
  components: {
    componentA,
    componentB: componentA,
  },
  singleVariationName: 'testingSingle',
}

import { ComponentConfig, ComponentsMap } from '@jacco-meijer/wheelroom'

import { query as myNewComponentQuery } from './my-new-component/graphql'
import { fragment as myNewComponentFragment } from './my-new-component/graphql'
import { model as myNewComponentModel } from './my-new-component/model'

export const componentsMap = {
  myNewComponent: {
    fragment: myNewComponentFragment,
    model: myNewComponentModel,
    query: myNewComponentQuery,
  } as ComponentConfig,
} as ComponentsMap

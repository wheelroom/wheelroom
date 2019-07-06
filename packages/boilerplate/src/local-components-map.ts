import { ComponentsMap, ComponentsMapItem } from '@jacco-meijer/wheelroom'

export const localComponentsMap = {
  demo: {
    fragment: 'demo fragment',
    model: {
      contentBackend: 'contentful',
      description: 'Demo model section',
      displayField: 'title',
      modelVersion: '1.0.0',
      name: 'Demo model section',
      type: 'demoModelSection',
      wheelroomType: 'section',
    },
    query: 'demo query',
  } as ComponentsMapItem,
} as ComponentsMap

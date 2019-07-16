import { Model } from '@jacco-meijer/wheelroom-plugin-contentful'

export interface Vars {
  answers: {
    componentName: string
    wheelroomType: string
    componentFields: string
    localizedFields: boolean
  }
  options: {
    filter: string[]
  }
  component: {
    component: {
      fragment: string
      model: Model
      query: string
    }
    options: {
      variations: string[]
      overwriteVariations: boolean
    }
    sourceModule: string
  }
  componentName: {
    camelCase: string
    dashCase: string
    firstUpperCase: string
    pascalCase: string
  }
}

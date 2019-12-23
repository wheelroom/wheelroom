// import { Model } from '@jacco-meijer/wheelroom-plugin-contentful'

export interface Vars {
  answers: {
    componentName: string
    wheelroomType: string
    componentFields: string
  }
  options: {
    filter: string[]
  }
  component: {
    component: {
      fragment: string
      // model: Model
      query: string
    }
    options: {
      localizedFields?: string[]
      skipFields?: string[]
      variations?: string[]
    }
    sourceModule: string
  }
  componentName: {
    camelCase: string
    kebabCase: string
    sentenceCaseCase: string
    pascalCase: string
  }
}

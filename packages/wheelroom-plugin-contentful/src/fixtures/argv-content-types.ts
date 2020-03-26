interface AllFieldTypesModel {
  fields: {
    dateField?: any
    dropdownField?: any
    mediaField?: any
    longTextField?: any
    multipleComponentsField?: any
    numberField?: any
    richTextField?: any
    shortTextField?: any
    shortTextFieldExtended?: any
    singleComponentField?: any
    tagsField?: any
    title: any
  }
  model: 'allFieldTypes'
}
interface FirstSectionModel {
  fields: {
    defaultField?: any
    title: any
  }
  model: 'firstSection'
}
interface GlobalModelModel {
  fields: {
    heading?: any
    title: any
  }
  model: 'globalModel'
}
interface NoFragmentModel {
  fields: {
    heading?: any
    title: any
  }
  model: 'noFragment'
}
interface PageModelModel {
  fields: {
    heading?: any
    title: any
  }
  model: 'pageModel'
}
interface SecondSectionModel {
  fields: {
    heading?: any
    title: any
  }
  model: 'secondSection'
}
interface SubPageModelModel {
  fields: {
    heading?: any
    title: any
  }
  model: 'subPageModel'
}
type Model =
  | AllFieldTypesModel
  | FirstSectionModel
  | GlobalModelModel
  | NoFragmentModel
  | PageModelModel
  | SecondSectionModel
  | SubPageModelModel

export interface ArgvContent {
  [componentId: string]: Model
}

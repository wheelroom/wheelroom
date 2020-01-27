interface FooterSectionModel {
  fields: {
    backgroundColor: 'blue' | 'orange'
    footerNavigation: 'navigation'
    title: string
  }
  model: 'footerSection'
}
interface GlobalsModel {
  fields: {
    addressLine1: string
    addressLine2: string
    emailAddress: string
    linkedinUrl?: string
    phoneNumber?: string
    siteAuthor?: string
    siteDescription?: string
    siteHeading: string
    siteKeywords?: string[]
    siteTitle?: string
    title: string
  }
  model: 'globals'
}
interface ListSectionModel {
  fields: {
    heading: string
    listItems: Array<'page'>
    variation: 'large items' | 'small items'
    title: string
  }
  model: 'listSection'
}
interface NavigationModel {
  fields: {
    routes: Array<'page'>
    title: string
  }
  model: 'navigation'
}
interface OpenerSectionModel {
  fields: {
    boxBackgroundColor?: 'blue' | 'orange'
    heading?: string
    image?: boolean
    infoText?: string
    mainNavigation: 'navigation'
    variation: 'home opener' | 'page opener'
    title: string
  }
  model: 'openerSection'
}
interface PageModel {
  fields: {
    listItemHeading?: string
    listItemHiddenText?: string
    listItemImage?: boolean
    listItemInfoText?: string
    listItemView?: 'orange bottom' | 'blue bottom' | 'full image'
    navigationHeading?: string
    pageHeading: string
    pageImage: boolean
    pageInfoText: string
    path: string
    pathName: string
    sections: string[]
    seoDescription: string
    seoTitle: string
    title: string
  }
  model: 'page'
}
interface QuoteSectionModel {
  fields: {
    avatar?: boolean
    heading: string
    subHeading?: string
    text: string
    title: string
  }
  model: 'quoteSection'
}
interface TextSectionModel {
  fields: {
    text: string
    title: string
  }
  model: 'textSection'
}
type Model =
  | FooterSectionModel
  | GlobalsModel
  | ListSectionModel
  | NavigationModel
  | OpenerSectionModel
  | PageModel
  | QuoteSectionModel
  | TextSectionModel

export interface ContentTypes {
  [componentId: string]: Model
}

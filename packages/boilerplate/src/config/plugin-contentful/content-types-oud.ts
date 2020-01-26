interface FooterSectionModel {
  fields: {
    backgroundColor: any
    footerNavigation: any
  }
  model: 'footerSection'
}
interface GlobalsModel {
  fields: {
    addressLine1: any
    addressLine2: any
    emailAddress: any
    linkedinUrl?: any
    phoneNumber?: any
    siteAuthor?: any
    siteDescription?: any
    siteHeading: any
    siteKeywords?: any
    siteTitle?: any
  }
  model: 'globals'
}
interface ListSectionModel {
  fields: {
    heading: any
    listItems: any
    variation: any
  }
  model: 'listSection'
}
interface NavigationModel {
  fields: {
    routes: any
  }
  model: 'navigation'
}
interface OpenerSectionModel {
  fields: {
    boxBackgroundColor?: any
    heading?: any
    image?: any
    infoText?: any
    mainNavigation: any
    variation: any
  }
  model: 'openerSection'
}
interface PageModel {
  fields: {
    listItemHeading?: any
    listItemHiddenText?: any
    listItemImage?: any
    listItemInfoText?: any
    listItemView?: any
    navigationHeading?: any
    pageHeading: any
    pageImage: any
    pageInfoText: any
    path: any
    pathName: any
    sections: any
    seoDescription: any
    seoTitle: any
  }
  model: 'page'
}
interface QuoteSectionModel {
  fields: {
    avatar?: any
    heading: any
    subHeading?: any
    text: any
  }
  model: 'quoteSection'
}
interface TextSectionModel {
  fields: {
    text: any
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

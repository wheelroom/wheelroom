/**
 * Content set types
 *
 * This was generated with the helper code in ../helpers/content-types-generator.ts
 *
 */

interface FooterSectionModel {
  fields: {
    backgroundColor: 'black' | 'white'
    navigation: 'openerNavigation' | 'footerNavigation'
    title: string
  }
  model: 'footerSection'
}
interface GlobalsModel {
  fields: {
    addressLine1?: string
    addressLine2?: string
    emailAddress?: string
    linkedinUrl?: string
    phoneNumber?: string
    siteAuthor?: string
    siteDescription?: string
    siteHeading?: string
    siteKeywords?: string[]
    title: string
  }
  model: 'globals'
}
interface ListItemModel {
  fields: {
    view?: 'bottom white' | 'bottom black' | 'full width image'
    link?:
      | 'homePage'
      | 'documentationPage'
      | 'pluginsPage'
      | 'showcasePage'
      | 'aboutPage'
    heading?: string
    image?: boolean
    abstract?: string
    extraText?: string
    title: string
  }
  model: 'listItem'
}
interface ListSectionModel {
  fields: {
    variation: 'large items' | 'small items'
    items: string[]
    heading?: string
    title: string
  }
  model: 'listSection'
}
interface NavigationModel {
  fields: {
    pages: Array<
      | 'homePage'
      | 'documentationPage'
      | 'pluginsPage'
      | 'showcasePage'
      | 'aboutPage'
    >
    title: string
  }
  model: 'navigation'
}
interface OpenerSectionModel {
  fields: {
    variation: 'navigation only' | 'home page'
    navigation: 'openerNavigation' | 'footerNavigation'
    boxBackgroundColor: 'transparent' | 'black' | 'white'
    heading?: string
    image?: boolean
    abstract?: string
    title: string
  }
  model: 'openerSection'
}
interface PageModel {
  fields: {
    path: string
    sections: Array<
      | 'homeOpener'
      | 'navigationOpener'
      | 'aboutText'
      | 'showcaseText'
      | 'pluginsText'
      | 'wheelroomIntroductionText'
      | 'documentationText'
      | 'careQuote'
      | 'buildLoveQuote'
      | 'passionQuote'
      | 'endOfPageLinks'
      | 'endOfPageLinksLarge'
      | 'defaultFooter'
    >
    heading: string
    navigationHeading?: string
    image?: boolean
    abstract?: string
    seoTitle?: string
    seoDescription?: string
    title: string
  }
  model: 'page'
}
interface QuoteSectionModel {
  fields: {
    heading: string
    subHeading: string
    abstract: string
    image?: boolean
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
  | ListItemModel
  | ListSectionModel
  | NavigationModel
  | OpenerSectionModel
  | PageModel
  | QuoteSectionModel
  | TextSectionModel

export interface ContentTypes {
  [componentId: string]: Model
}

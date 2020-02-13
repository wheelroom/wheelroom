/**
 * Content set types
 * 
 * This was generated with the helper code in ../helpers/content-types-generator.ts
 * 
 */

interface FooterSectionModel {
  fields: {
    backgroundColor: 'green' | 'mint'
    navigation: 'openerNavigatie' | 'footerNavigatie'
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
    view?: 'onderkant mint' | 'onderkant groen' | 'volledige afbeelding'
    link?: 'homePage' | 'productPage' | 'backgroundPage' | 'contactPage'
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
    variation: 'grote tegels' | 'kleine tegels'
    items: string[]
    heading?: string
    title: string
  }
  model: 'listSection'
}
interface NavigationModel {
  fields: {
    pages: Array<'homePage' | 'productPage' | 'backgroundPage' | 'contactPage'>
    title: string
  }
  model: 'navigation'
}
interface OpenerSectionModel {
  fields: {
    variation: 'home pagina' | 'normale pagina'
    navigation: 'openerNavigatie' | 'footerNavigatie'
    boxBackgroundColor: 'green' | 'mint'
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
    sections: Array<'homeOpener' | 'productOpener' | 'backgroundOpener' | 'contactOpener' | 'contactText' | 'productcodeText' | 'merkverwateringText' | 'merkarchitectuurText' | 'naamcreatieText' | 'careQuote' | 'buildLoveQuote' | 'passionQuote' | 'endOfPageLinks' | 'endOfPageLinksLarge' | 'standardFooter'>
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

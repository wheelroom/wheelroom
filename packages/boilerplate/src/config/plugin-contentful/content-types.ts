import { FluidImage } from '../../views/image/image'

interface FooterSection {
  fields: {
    backgroundColor: string
    footerNavigation: any
    title: string
  }
  model: 'footerSection'
}
interface Globals {
  fields: {
    addressLine1: string
    addressLine2: string
    emailAddress: string
    linkedinUrl: string
    phoneNumber: string
    siteAuthor: string
    siteDescription: string
    siteHeading: string
    siteKeywords: string[]
    siteTitle: string
    title: string
  }
  model: 'globals'
}
interface ListSection {
  fields: {
    heading: string
    listItems: any
    variation: string
    title: string
  }
  model: 'listSection'
}
interface Navigation {
  fields: {
    routes: any
    title: string
  }
  model: 'navigation'
}
interface OpenerSection {
  fields: {
    boxBackgroundColor: string
    heading: string
    image: FluidImage
    infoText: {
      infoText: string
    }
    mainNavigation: any
    variation: string
    title: string
  }
  model: 'openerSection'
}
interface Page {
  fields: {
    listItemHeading: string
    listItemHiddenText: string
    listItemImage: FluidImage
    listItemInfoText: {
      listItemInfoText: string
    }
    listItemView: string
    navigationHeading: string
    pageHeading: string
    pageImage: FluidImage
    pageInfoText: {
      pageInfoText: string
    }
    path: string
    pathName: string
    sections: any
    seoDescription: string
    seoTitle: string
    title: string
  }
  model: 'page'
}
interface QuoteSection {
  fields: {
    avatar: FluidImage
    heading: string
    subHeading: string
    text: {
      text: string
    }
    title: string
  }
  model: 'quoteSection'
}
interface TextSection {
  fields: {
    text: {
      text: string
    }
    title: string
  }
  model: 'textSection'
}

type Model =
  | FooterSection
  | Globals
  | ListSection
  | Navigation
  | OpenerSection
  | Page
  | QuoteSection
  | TextSection

export interface ContentTypes {
  [componentId: string]: Model
}

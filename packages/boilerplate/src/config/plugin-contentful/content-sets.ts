/**
 * Fixture content for testing
 *
 *
 */

import { FluidImage } from '../../views/image/image'
import { ContentTypes } from './content-types'

export interface ContentSets {
  [contentSetName: string]: ContentTypes
}

export const contentSets: ContentSets = {
  boilerplate: {
    footerSection: {
      fields: {
        backgroundColor: 'blue',
        footerNavigation: [],
        title: '',
      },
      model: 'footerSection',
    },
    globals: {
      fields: {
        addressLine1: 'any',
        addressLine2: 'any',
        emailAddress: 'any',
        linkedinUrl: 'any',
        phoneNumber: 'any',
        siteAuthor: 'any',
        siteDescription: 'any',
        siteHeading: 'any',
        siteKeywords: ['any'],
        siteTitle: 'any',
        title: '',
      },
      model: 'globals',
    },
    listSection: {
      fields: {
        heading: 'any',
        listItems: 'any',
        title: '',
        variation: 'any',
      },
      model: 'listSection',
    },
    navigation: {
      fields: {
        routes: 'any',
        title: '',
      },
      model: 'navigation',
    },
    openerSection: {
      fields: {
        boxBackgroundColor: 'any',
        heading: 'any',
        image: {} as FluidImage,
        infoText: { infoText: 'any' },
        mainNavigation: 'any',
        title: '',
        variation: 'any',
      },
      model: 'openerSection',
    },
    page: {
      fields: {
        listItemHeading: 'any',
        listItemHiddenText: 'any',
        listItemImage: {} as FluidImage,
        listItemInfoText: { listItemInfoText: 'any' },
        listItemView: 'any',
        navigationHeading: 'any',
        pageHeading: 'any',
        pageImage: {} as FluidImage,
        pageInfoText: { pageInfoText: 'any' },
        path: 'any',
        pathName: 'any',
        sections: 'any',
        seoDescription: 'any',
        seoTitle: 'any',
        title: '',
      },
      model: 'page',
    },
    quote: {
      fields: {
        avatar: {} as FluidImage,
        heading: 'any',
        subHeading: 'any',
        text: { text: 'any' },
        title: '',
      },
      model: 'quoteSection',
    },
    somePage: {
      fields: {
        heading: 'any',
        listItems: 'any',
        title: '',
        variation: 'any',
      },
      model: 'listSection',
    },
    text: {
      fields: {
        text: { text: 'any' },
        title: '',
      },
      model: 'textSection',
    },
  },
}

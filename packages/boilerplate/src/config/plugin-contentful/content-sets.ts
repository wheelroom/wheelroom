/**
 * Fixture content for testing
 *
 *
 */

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
        image: true,
        infoText: '',
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
        listItemImage: true,
        listItemInfoText: '',
        listItemView: 'any',
        navigationHeading: 'any',
        pageHeading: 'any',
        pageImage: true,
        pageInfoText: '',
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
        avatar: true,
        heading: 'any',
        subHeading: 'any',
        text: '',
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
        text: '',
        title: '',
      },
      model: 'textSection',
    },
  },
}

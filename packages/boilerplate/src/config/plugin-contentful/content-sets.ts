/**
 * Fixture content for testing
 *
 *
 */

import { ContentTypes } from './content-types'

export interface ContentSets {
  [contentSetName: string]: ContentTypes
}

// tslint:disable: object-literal-sort-keys
export const contentSets: ContentSets = {
  boilerplate: {
    homePage: {
      fields: {
        listItemHeading: 'Home page',
        listItemHiddenText: '',
        listItemImage: true,
        listItemInfoText: '',
        listItemView: 'blue bottom',
        navigationHeading: '',
        pageHeading: '',
        pageImage: true,
        pageInfoText: '',
        path: '',
        pathName: '',
        sections: [],
        seoDescription: '',
        seoTitle: '',
        title: '',
      },
      model: 'page',
    },
    footerSection: {
      fields: {
        backgroundColor: 'blue',
        footerNavigation: 'navigation',
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
        listItems: ['page'],
        title: '',
        variation: 'large items',
      },
      model: 'listSection',
    },
    navigation: {
      fields: {
        routes: ['page'],
        title: '',
      },
      model: 'navigation',
    },
    openerSection: {
      fields: {
        boxBackgroundColor: 'blue',
        heading: 'any',
        image: true,
        infoText: '',
        mainNavigation: 'navigation',
        title: '',
        variation: 'home opener',
      },
      model: 'openerSection',
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
        listItems: ['page'],
        title: '',
        variation: 'large items',
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

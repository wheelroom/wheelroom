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
        footerNavigation: 'any',
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
        siteKeywords: 'any',
        siteTitle: 'any',
      },
      model: 'globals',
    },
    listSection: {
      fields: {
        heading: 'any',
        listItems: 'any',
        variation: 'any',
      },
      model: 'listSection',
    },
    navigation: {
      fields: {
        routes: 'any',
      },
      model: 'navigation',
    },
    openerSection: {
      fields: {
        boxBackgroundColor: 'any',
        heading: 'any',
        image: 'any',
        infoText: 'any',
        mainNavigation: 'any',
        variation: 'any',
      },
      model: 'openerSection',
    },
    page: {
      fields: {
        listItemHeading: 'any',
        listItemHiddenText: 'any',
        listItemImage: 'any',
        listItemInfoText: 'any',
        listItemView: 'any',
        navigationHeading: 'any',
        pageHeading: 'any',
        pageImage: 'any',
        pageInfoText: 'any',
        path: 'any',
        pathName: 'any',
        sections: 'any',
        seoDescription: 'any',
        seoTitle: 'any',
      },
      model: 'page',
    },
    quote: {
      fields: {
        avatar: 'any',
        heading: 'any',
        subHeading: 'any',
        text: 'any',
      },
      model: 'quoteSection',
    },
    somePage: {
      fields: {
        heading: 'any',
        listItems: 'any',
        variation: 'any',
      },
      model: 'listSection',
    },
    text: {
      fields: {
        text: 'any',
      },
      model: 'textSection',
    },
  },
}

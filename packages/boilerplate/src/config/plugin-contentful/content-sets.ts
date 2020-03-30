/**
 * Defines the boilerplate content set. In English.
 *
 *
 */

import { ContentTypes } from './content-types'

export interface ContentSets {
  [contentSetName: string]: ContentTypes
}

export const contentSets: ContentSets = {
  // export const contentSets: any = {
  boilerplate: {
    siteGlobals: {
      fields: {
        siteAuthor: 'John Doe',
        siteDescription: 'Site description.',
        siteHeading: 'Site heading',
        siteKeywords: ['Wheelroom', 'io', 'TypeScript', 'Contentful'],
        title: 'Global settings for this site',
      },
      model: 'globals',
    },
    homePage: {
      fields: {
        path: '/home',
        navigationHeading: 'Home',
        sections: ['siteHeader', 'homeHeadline', 'homeHText', 'siteFooter'],
        title: 'Home',
      },
      model: 'page',
    },
    siteHeader: {
      fields: {
        topicOptions: ['Hide icon'],
        variation: 'navigation',
        navigation: 'mainNavigation',
        title: 'Site header (navigation)',
      },
      model: 'pageSection',
    },
    siteFooter: {
      fields: {
        variation: 'navigation',
        navigation: 'mainNavigation',
        title: 'Site footer (navigation)',
      },
      model: 'pageSection',
    },
    homeHeadline: {
      fields: {
        topics: ['demoTopic'],
        topicOptions: ['Reversed order'],
        variation: 'headline',
        title: 'Demo headline (headline)',
      },
      model: 'pageSection',
    },
    homeHText: {
      fields: {
        topicOptions: ['Reversed order'],
        variation: 'text',
        text: 'demotext',
        title: 'Demo text (text)',
      },
      model: 'pageSection',
    },
    demotext: {
      fields: {
        text: `## Heading
        
En een regel.
Deze line-break moet er niet zijn.`,
        title: 'Demo text',
      },
      model: 'text',
    },
    demoTopic: {
      fields: {
        heading: 'Demo topic',
        abstract: `What happens with new-lines?
Like this one`,
        icon: 'activity',
        media: true,
        actions: ['demoAction'],
        title: 'Demo topic',
      },
      model: 'topic',
    },
    demoAction: {
      fields: {
        heading: 'Go home',
        page: 'homePage',
        title: 'Go home',
      },
      model: 'action',
    },
    mainNavigationSegment: {
      fields: {
        pages: ['homePage'],
        title: 'Main navigation segment',
      },
      model: 'navigationSegment',
    },
    mainNavigation: {
      fields: {
        segments: ['mainNavigationSegment'],
        title: 'Main navigation',
      },
      model: 'navigation',
    },
  },
}

/**
 * Defines the boilerplate content set. In English.
 *
 *
 */

import { ContentTypes } from './content-types'

export interface ContentSets {
  [contentSetName: string]: ContentTypes
}

// export const contentSets: any = {
export const contentSets: ContentSets = {
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
    somePage: {
      fields: {
        path: '/some-page',
        navigationHeading: 'Some page',
        sections: ['siteHeader', 'homeHeadline', 'homeHText', 'siteFooter'],
        title: 'Some page',
      },
      model: 'page',
    },
    siteHeader: {
      fields: {
        topicOptions: ['Hide icon'],
        variation: 'navigation-wr',
        navigation: 'mainNavigation',
        title: 'Site header (navigation)',
      },
      model: 'pageSection',
    },
    siteFooter: {
      fields: {
        variation: 'navigation-wr',
        navigation: 'mainNavigation',
        title: 'Site footer (navigation)',
      },
      model: 'pageSection',
    },
    homeHeadline: {
      fields: {
        topics: ['demoTopic'],
        topicOptions: ['Reversed order'],
        variation: 'headline-wr',
        title: 'Demo headline (headline)',
      },
      model: 'pageSection',
    },
    homeHText: {
      fields: {
        topicOptions: ['Reversed order'],
        variation: 'text-wr',
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
        page: 'somePage',
        title: 'Go home',
      },
      model: 'action',
    },
    mainNavigationSegment: {
      fields: {
        pages: ['somePage'],
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

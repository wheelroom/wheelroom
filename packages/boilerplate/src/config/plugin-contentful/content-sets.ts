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
        siteAuthor: 'Site author',
        siteDescription: 'Site description.',
        siteHeading: 'Site heading',
        siteKeywords: [
          'Wheelroom',
          'Boilerplate',
          'TypeScript',
          'Contentful',
          'Netlify',
        ],
        title: 'Global settings for this site',
      },
      model: 'globals',
    },
    homePage: {
      fields: {
        path: '/',
        navigationHeading: 'Home',
        sections: ['siteHeader', 'wrHeadline', 'wrBlock', 'siteFooter'],
        title: 'Home (Demo page)',
      },
      model: 'page',
    },
    wheelroomPage: {
      fields: {
        path: '/wheelroom',
        navigationHeading: 'Wheelroom',
        sections: ['siteHeader', 'wrHeadline', 'wrBlock', 'siteFooter'],
        title: 'Wheelroom (Demo page)',
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
    wrHeadline: {
      fields: {
        topics: ['promiseTopic'],
        topicOptions: ['Reversed order'],
        variation: 'headline-wr',
        title: 'Wheelroom promise (Demo headline)',
      },
      model: 'pageSection',
    },
    wrBlock: {
      fields: {
        topics: ['openSourceTopic', 'nonprofitTopic', 'freeForEveryoneTopic'],
        topicOptions: ['Hide media'],
        variation: 'block-wr',
        title: 'Three (3) demo topics (Demo block)',
      },
      model: 'pageSection',
    },
    wrText: {
      fields: {
        variation: 'text-wr',
        text: 'wrtext',
        title: 'Wheelroom (Demo text)',
      },
      model: 'pageSection',
    },
    wrtext: {
      fields: {
        text: `## Wheelroom`,
        title: 'Rich Text',
      },
      model: 'text',
    },
    openSourceTopic: {
      fields: {
        heading: 'Open Source',
        abstract: `Everything we produce is open source. Every time we write code, we get to share it with the world.`,
        icon: 'code',
        media: true,
        actions: ['wrAction'],
        title: 'Open Source (Demo topic)',
      },
      model: 'topic',
    },
    nonprofitTopic: {
      fields: {
        heading: 'Nonprofit',
        abstract: `Our goal is to protect free expression and enable secure global communication. We're working with users to build something sustainable.`,
        icon: 'heart',
        media: true,
        actions: ['wrAction'],
        title: 'Nonprofit (Demo topic)',
      },
      model: 'topic',
    },
    freeForEveryoneTopic: {
      fields: {
        heading: 'Free for everyone',
        abstract: `Wheelroom is an independent nonprofit. Development is supported by grants and donations from people like you.`,
        icon: 'globe',
        media: true,
        actions: ['wrAction'],
        title: 'Nonprofit (Demo topic)',
      },
      model: 'topic',
    },
    wrAction: {
      fields: {
        heading: 'Try Wheelroom for Free',
        page: 'homePage',
        title: 'Try Wheelroom for Free (Demo action)',
      },
      model: 'action',
    },
    mainNavigationSegment: {
      fields: {
        pages: ['homePage', 'wheelroomPage'],
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

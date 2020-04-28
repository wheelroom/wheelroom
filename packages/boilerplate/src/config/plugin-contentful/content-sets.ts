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
        sections: ['siteHeader', 'wrText', 'siteFooter'],
        title: 'Wheelroom (Demo page)',
      },
      model: 'page',
    },
    siteHeader: {
      fields: {
        topicOptions: ['Hide icon'],
        variation: 'navigation-wr',
        navigation: 'headerNavigation',
        title: 'Site header (navigation)',
        actions: ['wrGetStartedAction'],
      },
      model: 'pageSection',
    },
    siteFooter: {
      fields: {
        variation: 'navigation-wr',
        navigation: 'footerNavigation',
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
        text: `# Wheelroom

Wheelroom connects your code base within 5 minutes to many services like Contentful and Netlify. The Wheelroom boilerplate includes content models, page sections, wheelroom themes, example content and much more.

## Why Wheelroom?

Wheelroom is an open source project and created for developers that want to work with the latest technology and services. Wheelroom seamlessly connects many services and renders a data driven client side interface. Check for more information the plugins or start building your own project with the Wheelroom boilerplate.

## Wheelroom boilerplate

With the [Wheelroom boilerplate](https://github.com/wheelroom/wheelroom/tree/master/packages/boilerplate) you can build your own client side application with JAMstack technology. It is secure, super fast, low cost and scalable.

## Contributors

Feel free to contribute to the open source Wheelroom project. Do you have question or a feature request, please add an [issue](https://github.com/wheelroom/wheelroom/issues).

- [Jacco Meijer](https://github.com/jaccomeijer)
- [Thijs Krooswijk](https://github.com/thijskrooswijk)`,
        title: 'Rich Text',
      },
      model: 'text',
    },
    promiseTopic: {
      fields: {
        heading: 'The world’s fastest boilerplate for building applications',
        abstract: `Wheelroom connects your code base within 5 minutes to many services like Contentful and Netlify. `,
        icon: 'layers',
        media: true,
        actions: ['wrGithubAction'],
        title: 'Promise (Demo topic)',
      },
      model: 'topic',
    },
    openSourceTopic: {
      fields: {
        heading: 'Open Source',
        abstract: `Everything we produce is open source. Every time we write code, we get to share it with the world.`,
        icon: 'code',
        media: true,
        actions: ['wrGithubAction'],
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
        actions: ['wrGithubAction'],
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
        actions: ['wrGithubAction'],
        title: 'Nonprofit (Demo topic)',
      },
      model: 'topic',
    },
    wrBrandAction: {
      fields: {
        heading: 'Wheelroom',
        page: 'homePage',
        title: 'Wheelroom (Demo action)',
      },
      model: 'action',
    },
    wrGithubAction: {
      fields: {
        heading: 'Try Wheelroom for Free',
        page: 'wheelroomPage',
        title: 'Try Wheelroom for Free (Demo action)',
      },
      model: 'action',
    },
    wrGetStartedAction: {
      fields: {
        heading: 'Get started',
        url: 'https://github.com/wheelroom/wheelroom',
        title: 'Get started (Demo action)',
      },
      model: 'action',
    },
    wrHomeAction: {
      fields: {
        heading: 'Go back to Homepage',
        page: 'homePage',
        title: 'Go back to Homepage (Demo action)',
      },
      model: 'action',
    },
    headerNavigationSegment: {
      fields: {
        pages: ['homePage', 'wheelroomPage'],
        title: 'Header navigation segment',
      },
      model: 'navigationSegment',
    },
    headerNavigation: {
      fields: {
        segments: ['headerNavigationSegment'],
        title: 'Header navigation',
        skipToContentHeading: 'Skip to Wheelroom content',
        brandAction: 'wrBrandAction',
      },
      model: 'navigation',
    },
    footerNavigationSegment: {
      fields: {
        pages: ['homePage', 'wheelroomPage'],
        title: 'Footer navigation segment',
      },
      model: 'navigationSegment',
    },
    footerNavigation: {
      fields: {
        segments: ['footerNavigationSegment'],
        title: 'Footer navigation',
      },
      model: 'navigation',
    },
  },
}

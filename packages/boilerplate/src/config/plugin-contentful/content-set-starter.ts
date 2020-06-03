import { ContentTypes } from './content-types-starter'

export const starter: ContentTypes = {
  mediaBreakpoint: {
    fields: {
      extraLarge: true,
      large: true,
      medium: true,
      small: true,
      title: 'Media breakpoint',
    },
    model: 'mediaBreakpoint',
  },
  footerNavigation: {
    fields: {
      variation: 'menu',
      segments: ['footerNavigationSegment'],
      title: 'Footer navigation',
    },
    model: 'navigation',
  },
  footerNavigationSegment: {
    fields: {
      actions: ['goHome', 'goFreeForEveryone', 'goNonprofit', 'goOpenSource'],
      title: 'Footer navigation segment',
    },
    model: 'navigationSegment',
  },
  freeForEveryonePage: {
    fields: {
      path: '/free-for-everyone',
      sections: [
        'siteHeader',
        'starterCardSection',
        'starterQuoteSection',
        'siteFooter',
      ],
      seoDescription:
        'Wheelroom is an independent nonprofit. Development is supported by grants and donations from people like you.',
      seoImage: true,
      seoTitle: 'Free for everyone',
      title: '/free-for-everyone',
    },
    model: 'page',
  },
  freeForEveryoneTopic: {
    fields: {
      abstract:
        'Wheelroom is an independent nonprofit. Development is supported by grants and donations from people like you.',
      actions: ['goHome'],
      heading: 'Free for everyone',
      icon: 'globe',
      media: true,
      title: 'Free for everyone',
    },
    model: 'topic',
  },
  getStarted: {
    fields: {
      description: 'Visit our Github Wheelroom code repository',
      eventId: 'get-started',
      heading: 'Get started',
      title: 'Get started link',
      url: 'https://github.com/wheelroom/wheelroom',
    },
    model: 'action',
  },
  githubProfileTopic: {
    fields: {
      abstract: 'Check our code-base on Github',
      actions: ['getStarted'],
      heading: 'Github profile',
      icon: 'github',
      media: true,
      title: 'Github profile',
    },
    model: 'topic',
  },
  goFreeForEveryone: {
    fields: {
      description: "We're working with users to build something sustainable",
      eventId: 'go-free-for-everyone',
      heading: 'Free for everyone',
      page: 'freeForEveryonePage',
      title: 'Go free for everyone',
    },
    model: 'action',
  },
  goHome: {
    fields: {
      description: 'Go to Wheelroom homepage',
      eventId: 'go-home',
      heading: 'Home',
      page: 'homePage',
      title: 'Go home',
    },
    model: 'action',
  },
  goNonprofit: {
    fields: {
      description: 'Wheelroom is an independent nonprofit',
      eventId: 'go-non-profit',
      heading: 'Nonprofit',
      page: 'nonprofitPage',
      title: 'Go nonprofit',
    },
    model: 'action',
  },
  goOpenSource: {
    fields: {
      description: 'Wheelroom is an open source boilerplate',
      eventId: 'go-open-source',
      heading: 'Open source',
      page: 'openSourcePage',
      title: 'Go open source',
    },
    model: 'action',
  },
  headerNavigation: {
    fields: {
      variation: 'menu',
      segments: ['headerNavigationSegment'],
      title: 'Header navigation',
    },
    model: 'navigation',
  },
  headerNavigationSegment: {
    fields: {
      actions: ['goHome', 'goFreeForEveryone', 'goNonprofit', 'goOpenSource'],
      title: 'Header navigation segment',
    },
    model: 'navigationSegment',
  },
  homePage: {
    fields: {
      path: '/',
      sections: [
        'siteHeader',
        'starterHeroSection',
        'starterBlockSection',
        'siteFooter',
      ],
      seoDescription:
        'Wheelroom is a new approach to faster, cost efficient and more secure applications.',
      seoImage: true,
      seoTitle: 'The world’s fastest boilerplate for building applications',
      title: '/',
    },
    model: 'page',
  },
  nonprofitPage: {
    fields: {
      path: '/nonprofit',
      sections: [
        'siteHeader',
        'starterHeadlineSection',
        'starterTextSection',
        'siteFooter',
      ],
      seoDescription:
        "Our goal is to protect free expression and enable secure global communication. We're working with users to build something sustainable.",
      seoImage: true,
      seoTitle: 'Nonprofit',
      title: '/nonprofit',
    },
    model: 'page',
  },
  nonprofitTopic: {
    fields: {
      abstract:
        "Our goal is to protect free expression and enable secure global communication. We're working with users to build something sustainable.",
      actions: ['goHome'],
      heading: 'Nonprofit',
      icon: 'heart',
      media: true,
      title: 'Nonprofit',
    },
    model: 'topic',
  },
  openSourcePage: {
    fields: {
      path: '/open-source',
      sections: ['siteHeader', 'starterFeaturedSection', 'siteFooter'],
      seoDescription:
        'Everything we produce is open source. Every time we write code, we get to share it with the world.',
      seoImage: true,
      seoTitle: 'Open source',
      title: '/open-source',
    },
    model: 'page',
  },
  openSourceTopic: {
    fields: {
      abstract:
        'Everything we produce is open source. Every time we write code, we get to share it with the world.',
      actions: ['goHome'],
      heading: 'Open Source',
      icon: 'code',
      media: true,
      title: 'Open Source',
    },
    model: 'topic',
  },
  siteGlobals: {
    fields: {
      siteAuthor: 'Wheelroom',
      siteDescription:
        'Wheelroom is an open source project and created for developers that want to work with the latest technology and services.',
      siteHeading: 'Wheelroom',
      siteKeywords: ['Wheelroom', 'Boilerplate', 'Starter set'],
      title: 'Global settings for this site',
    },
    model: 'globals',
  },
  starterBlockSection: {
    fields: {
      title: 'Starter content (variation: block)',
      topicOptions: ['Hide media'],
      topics: ['freeForEveryoneTopic', 'openSourceTopic', 'nonprofitTopic'],
      variation: 'block',
      eventId: 'block',
    },
    model: 'pageSection',
  },
  starterCardSection: {
    fields: {
      title: 'Starter content (variation: card)',
      topics: [
        'freeForEveryoneTopic',
        'nonprofitTopic',
        'openSourceTopic',
        'wheelroomConnectsTopic',
      ],
      variation: 'card',
      eventId: 'card',
    },
    model: 'pageSection',
  },
  starterFeaturedSection: {
    fields: {
      title: 'Starter content (variation: featured)',
      topics: ['openSourceTopic', 'wheelroomConnectsTopic'],
      variation: 'featured',
      eventId: 'feature',
    },
    model: 'pageSection',
  },
  starterHeadlineSection: {
    fields: {
      title: 'Starter content (variation: headline)',
      topicOptions: ['Reversed order'],
      topics: ['nonprofitTopic'],
      variation: 'headline',
      eventId: 'headline',
    },
    model: 'pageSection',
  },
  starterHeroSection: {
    fields: {
      title: 'Starter content (variation: hero)',
      topicOptions: ['Hide icon'],
      topics: ['wheelroomConnectsTopic'],
      variation: 'hero',
      eventId: 'hero',
    },
    model: 'pageSection',
  },
  starterQuoteSection: {
    fields: {
      title: 'Starter content (variation: quote)',
      topics: ['wheelroomConnectsTopic'],
      variation: 'quote',
      eventId: 'quote',
    },
    model: 'pageSection',
  },
  starterShowcaseSection: {
    fields: {
      title: 'Starter content (variation: showcase)',
      topicOptions: ['Hide icon'],
      topics: [
        'freeForEveryoneTopic',
        'nonprofitTopic',
        'openSourceTopic',
        'wheelroomConnectsTopic',
      ],
      variation: 'showcase',
      eventId: 'showcase',
    },
    model: 'pageSection',
  },
  starterText: {
    fields: {
      text: `## Wheelroom

Everything we produce is open source. Every time we write code, we get to share it with the world.`,
      title: 'Starter content',
    },
    model: 'text',
  },
  starterTextSection: {
    fields: {
      title: 'Starter content (variation: text)',
      variation: 'block',
      eventId: 'text',
    },
    model: 'pageSection',
  },
  wheelroomConnectsTopic: {
    fields: {
      abstract:
        'Wheelroom connects your code base within 5 minutes to many services like Contentful and Netlify. ',
      actions: ['goHome'],
      heading: 'The world’s fastest boilerplate for applications',
      icon: 'layers',
      media: true,
      title: 'Wheelroom connects',
    },
    model: 'topic',
  },
  siteHeader: {
    model: 'navigationSection',
    fields: {
      title: 'navigation (variation: header)',
      variation: 'header',
      navigation: ['headerNavigation'],
    },
  },
  siteFooter: {
    model: 'navigationSection',
    fields: {
      title: 'navigation (variation: footer)',
      variation: 'footer',
      navigation: ['footerNavigation'],
    },
  },
}

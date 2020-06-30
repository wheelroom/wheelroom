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
      icon: 'github',
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
  goBlogList: {
    fields: {
      description: 'Blog are here to stay',
      eventId: 'go-blog-list',
      heading: 'Blog',
      page: 'blogListPage',
      title: 'Go blog list',
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
  brandAction: {
    fields: {
      description: 'Go back to the Wheelroom homepage',
      eventId: 'brand-action',
      heading: 'Wheelroom',
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
  menuNavigation: {
    fields: {
      variation: 'menu',
      segments: ['menuSegment'],
      title: 'Menu navigation',
    },
    model: 'navigation',
  },
  menuSegment: {
    fields: {
      actions: [
        'goHome',
        'goBlogList',
        'goFreeForEveryone',
        'goNonprofit',
        'goOpenSource',
      ],
      title: 'Menu segment',
    },
    model: 'navigationSegment',
  },
  socialNavigation: {
    fields: {
      variation: 'social',
      segments: ['socialSegment'],
      title: 'Social navigation',
    },
    model: 'navigation',
  },
  socialSegment: {
    fields: {
      actions: ['getStarted'],
      title: 'Social segment',
    },
    model: 'navigationSegment',
  },
  actionNavigation: {
    fields: {
      variation: 'actions',
      segments: ['actionsSegment'],
      title: 'Action navigation',
    },
    model: 'navigation',
  },
  actionsSegment: {
    fields: {
      actions: ['getStarted'],
      title: 'Footer segment',
    },
    model: 'navigationSegment',
  },
  brandNavigation: {
    fields: {
      variation: 'brand',
      segments: ['brandSegment'],
      title: 'Brand navigation',
    },
    model: 'navigation',
  },
  brandSegment: {
    fields: {
      actions: ['brandAction'],
      title: 'Brand segment',
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
  blogPage: {
    fields: {
      path: '/blog/:slug',
      sections: ['siteHeader', 'starterBlogSection', 'siteFooter'],
      seoDescription: 'Blog are here to stay',
      seoImage: true,
      seoTitle: 'Blog',
      seoKeywords: ['Wheelroom', 'Blog'],
      title: '/blog/:slug',
    },
    model: 'page',
  },
  starterBlogSection: {
    fields: {
      title: 'Starter blog',
      variation: 'blog',
      eventId: 'blog',
    },
    model: 'blogSection',
  },
  blogListPage: {
    fields: {
      path: '/blog',
      sections: ['siteHeader', 'starterBlogListSection', 'siteFooter'],
      seoDescription: 'Blog are here to stay',
      seoImage: true,
      seoTitle: 'Blog',
      seoKeywords: ['Wheelroom', 'Blog'],
      title: '/blog',
    },
    model: 'page',
  },
  starterBlogListSection: {
    fields: {
      title: 'Starter blog list',
      variation: 'list',
      eventId: 'blog-list',
    },
    model: 'blogSection',
  },
  myGreatBlogProfile: {
    fields: {
      abstract: 'I am a blogger',
      actions: ['goHome'],
      heading: 'Mr. Blog',
      icon: 'smile',
      media: true,
      title: 'Mr. Blog',
    },
    model: 'topic',
  },
  myFrstBlog: {
    fields: {
      heading: 'My first blog',
      abstract: 'My first blog abstract',
      media: true,
      icon: 'heart',
      slug: 'my-first-blog-slug',
      date: '2020-05-01T00:00+01:00',
      text: `# My first blog
This is my first blog.
## Blog are green

All blogs that I produce are green. Every time I talk, I get to improve the world.`,
      categories: ['success', 'lifestyle'],
      authors: ['myGreatBlogProfile'],
      seoTitle: 'My first blog',
      seoDescription: 'Blog are here to stay',
      seoImage: true,
      title: 'My first blog',
    },
    model: 'blog',
  },
  mySecondBlog: {
    fields: {
      heading: 'My second blog',
      abstract: 'My second blog abstract',
      media: true,
      icon: 'heart',
      slug: 'my-second-blog-slug',
      date: '2020-05-02T00:00+01:00',
      text: `# My second blog
This is my second blog.
## Blog are cool

All blogs that I produce are open source. Every time I talk, I get to share it with the world.`,
      categories: ['lifestyle', 'home', 'opinion'],
      authors: ['myGreatBlogProfile'],
      seoTitle: 'My second blog',
      seoDescription: 'Blog are here to stay',
      seoImage: true,
      title: 'My second blog',
    },
    model: 'blog',
  },
  nonprofitPage: {
    fields: {
      path: '/nonprofit',
      sections: [
        'siteHeader',
        'starterHeadlineSection',
        'starterTextSection',
        'tableSectionTable',
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
      siteImage: true,
      skipToContentHeading: 'Skip to Wheelroom starter content',
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
    model: 'topicSection',
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
    model: 'topicSection',
  },
  starterFeaturedSection: {
    fields: {
      title: 'Starter content (variation: featured)',
      topics: ['openSourceTopic', 'wheelroomConnectsTopic'],
      variation: 'featured',
      eventId: 'feature',
    },
    model: 'topicSection',
  },
  starterHeadlineSection: {
    fields: {
      title: 'Starter content (variation: headline)',
      topicOptions: ['Reversed order'],
      topics: ['nonprofitTopic'],
      variation: 'headline',
      eventId: 'headline',
    },
    model: 'topicSection',
  },
  starterHeroSection: {
    fields: {
      title: 'Starter content (variation: hero)',
      topicOptions: ['Hide icon'],
      topics: ['wheelroomConnectsTopic'],
      variation: 'hero',
      eventId: 'hero',
    },
    model: 'topicSection',
  },
  starterQuoteSection: {
    fields: {
      title: 'Starter content (variation: quote)',
      topics: ['wheelroomConnectsTopic'],
      variation: 'quote',
      eventId: 'quote',
    },
    model: 'topicSection',
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
    model: 'topicSection',
  },
  starterTextSection: {
    fields: {
      title: 'Starter content text',
      variation: 'text',
      text: `## Wheelroom

Everything we produce is open source. Every time we write code, we get to share it with the world.`,
      eventId: 'text',
    },
    model: 'textSection',
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
      navigation: ['menuNavigation', 'actionNavigation', 'brandNavigation'],
    },
  },
  siteFooter: {
    model: 'navigationSection',
    fields: {
      title: 'navigation (variation: footer)',
      variation: 'footer',
      navigation: ['menuNavigation', 'socialNavigation'],
    },
  },
  tableSectionTable: {
    model: 'tableSection',
    fields: {
      title: 'table section (variation: table)',
      variation: 'table',
      tableRows: ['tableRowHeader', 'tableRowBody', 'tableRowFooter'],
    },
  },
  tableRowHeader: {
    fields: {
      title: 'table row header',
      topics: ['freeForEveryoneTopic', 'openSourceTopic', 'nonprofitTopic'],
      variation: 'header',
    },
    model: 'tableRow',
  },
  tableRowBody: {
    fields: {
      title: 'table row body',
      heading: 'Table row heading',
      topics: ['freeForEveryoneTopic', 'openSourceTopic', 'nonprofitTopic'],
      variation: 'body',
    },
    model: 'tableRow',
  },
  tableRowFooter: {
    fields: {
      title: 'table row footer',
      topics: ['freeForEveryoneTopic', 'openSourceTopic', 'nonprofitTopic'],
      variation: 'footer',
    },
    model: 'tableRow',
  },
}

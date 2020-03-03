/**
 * Defines the boilerplate content set. In English.
 *
 * The set is build up out of 5 pages: home, documentation, showcase, plugins and about.
 * The pages demonstrate the use of the models:
 *
 * - footerSection
 * - globals
 * - listSection
 * - navigation
 * - openerSection
 * - page
 * - quoteSection
 * - textSection
 *
 */

import { ContentTypes } from './content-types'

export interface ContentSets {
  [contentSetName: string]: ContentTypes
}

export const contentSets: ContentSets = {
  boilerplate: {
    siteGlobals: {
      fields: {
        addressLine1: 'AddressLine 1',
        addressLine2: '1234 AB  Utrecht',
        emailAddress: 'info@wheelroom.io',
        linkedinUrl: 'n/a',
        phoneNumber: '030-1234567',
        siteAuthor: 'John Doe',
        siteDescription: 'Site description.',
        siteHeading: 'Site heading',
        siteKeywords: ['Wheelroom', 'io', 'TypeScript', 'Contentful'],
        title: 'Wheelroom',
      },
      model: 'globals',
    },
    homePage: {
      fields: {
        navigationHeading: 'home',
        heading: 'Build amazing things with Wheelroom',
        image: true,
        abstract:
          'Wheelroom is an open source command line tool that helps developers build blazing fast websites and apps',
        path: '/',
        sections: [
          'homeOpener',
          'wheelroomIntroductionText',
          'passionQuote',
          'endOfPageLinksLarge',
          'defaultFooter',
        ],
        title: 'Home',
      },
      model: 'page',
    },
    homeOpener: {
      fields: {
        boxBackgroundColor: 'white',
        navigation: 'openerNavigation',
        title: 'Home opener',
        variation: 'home page',
      },
      model: 'openerSection',
    },
    openerNavigation: {
      fields: {
        pages: [
          'homePage',
          'documentationPage',
          'pluginsPage',
          'showcasePage',
          'aboutPage',
        ],
        title: 'Opener navigation',
      },
      model: 'navigation',
    },
    documentationPage: {
      fields: {
        navigationHeading: 'documentation',
        heading: 'Heading',
        image: true,
        abstract: 'Abstract',
        path: '/documentation',
        sections: [
          'navigationOpener',
          'documentationText',
          'defaultFooter',
        ],
        title: 'Documentation',
      },
      model: 'page',
    },
    navigationOpener: {
      fields: {
        boxBackgroundColor: 'transparent',
        navigation: 'openerNavigation',
        title: 'Navigation only opener',
        variation: 'navigation only',
      },
      model: 'openerSection',
    },
    pluginsPage: {
      fields: {
        navigationHeading: 'plugins',
        heading: 'Heading.',
        image: true,
        abstract: 'Abstract.',
        path: '/plugins',
        sections: [
          'navigationOpener',
          'pluginsText',
          'careQuote',
          'endOfPageLinks',
          'defaultFooter',
        ],
        title: 'Plugins',
      },
      model: 'page',
    },
    showcasePage: {
      fields: {
        navigationHeading: 'showcase',
        heading: 'Heading',
        image: true,
        abstract: 'Abstract',
        path: '/showcase',
        sections: [
          'navigationOpener',
          'showcaseText',
          'buildLoveQuote',
          'aboutText',
          'endOfPageLinks',
          'defaultFooter',
        ],
        title: 'Showcase',
      },
      model: 'page',
    },
    aboutPage: {
      fields: {
        navigationHeading: 'about',
        heading: 'About',
        image: true,
        abstract: 'Abstract.',
        path: '/about',
        sections: [
          'navigationOpener',
          'aboutText',
          'passionQuote',
          'showcaseText',
          'endOfPageLinks',
          'defaultFooter',
        ],
        title: 'About',
      },
      model: 'page',
    },
    aboutText: {
      fields: {
        text: `## About text

Qui ut porro quo. Illo et in sunt cumque officia sed. Vel eos voluptatem tempore harum culpa quam. Veniam ipsa beatae saepe consequatur voluptate debitis. Fugiat nihil consectetur quod. Voluptatibus culpa tenetur soluta ducimus eaque.

### Heading 3

Qui ut porro quo. Illo et in sunt cumque officia sed. Vel eos voluptatem tempore harum culpa quam. Veniam ipsa beatae saepe consequatur voluptate debitis. Fugiat nihil consectetur quod. Voluptatibus culpa tenetur soluta ducimus eaque.`,
        title: 'About text',
      },
      model: 'textSection',
    },
    showcaseText: {
      fields: {
        text: `## Showcase text

Qui ut porro quo. Illo et in sunt cumque officia sed. Vel eos voluptatem tempore harum culpa quam. Veniam ipsa beatae saepe consequatur voluptate debitis. Fugiat nihil consectetur quod. Voluptatibus culpa tenetur soluta ducimus eaque.`,
        title: 'Showcase text',
      },
      model: 'textSection',
    },
    documentationText: {
      fields: {
        text: `## Documentation text

Lorem ipsum.`,
        title: 'Documentation text',
      },
      model: 'textSection',
    },
    wheelroomIntroductionText: {
      fields: {
        text: `## Wheelroom introduction text

Qui ut porro quo. Illo et in sunt cumque officia sed. Vel eos voluptatem tempore harum culpa quam. Veniam ipsa beatae saepe consequatur voluptate debitis. Fugiat nihil consectetur quod. Voluptatibus culpa tenetur soluta ducimus eaque.`,
        title: 'Wheelroom introduction text',
      },
      model: 'textSection',
    },
    pluginsText: {
      fields: {
        text: `## Plugins text

Qui ut porro quo. Illo et in sunt cumque officia sed. Vel eos voluptatem tempore harum culpa quam. Veniam ipsa beatae saepe consequatur voluptate debitis. Fugiat nihil consectetur quod. Voluptatibus culpa tenetur soluta ducimus eaque.`,
        title: 'Plugins text',
      },
      model: 'textSection',
    },
    careQuote: {
      fields: {
        image: true,
        heading: 'Gary Vaynerchuk',
        subHeading: 'Ondernemer, spreker & marketing expert',
        abstract: 'Abstract.',
        title: 'Quote Gary Vaynerchuk',
      },
      model: 'quoteSection',
    },
    buildLoveQuote: {
      fields: {
        image: true,
        heading: 'Brian Chesky',
        subHeading: 'Cofounder van Airbnb',
        abstract: 'Abstract.',
        title: 'Quote Brian Chesky',
      },
      model: 'quoteSection',
    },
    passionQuote: {
      fields: {
        image: true,
        heading: 'Michael Hyatt',
        subHeading: 'Virtual business mentor',
        abstract: 'Abstract.',
        title: 'Quote Michael Hyatt',
      },
      model: 'quoteSection',
    },
    showcasePageItem: {
      fields: {
        abstract: 'Abstract.',
        heading: 'Heading',
        link: 'showcasePage',
        view: 'full width image',
        title: 'Item showcase page',
      },
      model: 'listItem',
    },
    documentationPageItem: {
      fields: {
        abstract: 'Abstract.',
        heading: 'Heading',
        link: 'showcasePage',
        view: 'bottom black',
        title: 'Item documentation page',
      },
      model: 'listItem',
    },
    aboutPageItem: {
      fields: {
        abstract: 'Abstract',
        heading: 'Heading',
        link: 'aboutPage',
        view: 'bottom white',
        title: 'Item about page',
      },
      model: 'listItem',
    },
    endOfPageLinks: {
      fields: {
        heading: 'Check',
        items: ['showcasePageItem', 'documentationPageItem', 'aboutPageItem'],
        title: 'References small',
        variation: 'small items',
      },
      model: 'listSection',
    },
    endOfPageLinksLarge: {
      fields: {
        heading: 'Check',
        items: ['showcasePageItem', 'documentationPageItem', 'aboutPageItem'],
        title: 'References large',
        variation: 'large items',
      },
      model: 'listSection',
    },
    defaultFooter: {
      fields: {
        backgroundColor: 'white',
        navigation: 'footerNavigation',
        title: 'Default footer',
      },
      model: 'footerSection',
    },
    footerNavigation: {
      fields: {
        pages: [
          'homePage',
          'documentationPage',
          'pluginsPage',
          'showcasePage',
          'aboutPage',
        ],
        title: 'Footer navigation',
      },
      model: 'navigation',
    },
  },
}

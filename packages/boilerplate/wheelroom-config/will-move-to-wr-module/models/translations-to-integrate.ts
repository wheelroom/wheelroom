/**
 * These are the (incomplete) dutch translations we have so far.
 *
 * These values will be moved to the trnalation object in the core models
 *
 * For english, the name attribute is set to the field name. This will do.
 * We will have to add helpText values for english, these do not exist yet
 *
 */

export const integrateTheseWithModels = {
  topic: {
    fields: {
      heading: {
        helpText: 'Titel van het onderwerp, zonder punt aan eind',
        name: 'Onderwerp titel',
      },
      abstract: {
        helpText: 'Korte omschrijving van het onderwerp, sluit af met een punt',
        name: 'Onderwerp tekst',
      },
      media: {
        helpText: 'Afbeelding bij het onderwerp',
        name: 'Onderwerp afbeelding',
      },
      icon: {
        helpText: 'Icoon bij het onderwerp',
        name: 'Onderwerp icoon',
      },
      actions: {
        helpText:
          'Eén of meerdere acties bij het onderwerp. Een actie heeft een eigen naam en kan ook linken naar een extern bron.',
        name: 'Onderwerp acties',
      },
      mediaEmbed: {
        helpText:
          'Voeg Youtube/Vimeo embed code toe. Note: Media embed ondersteund alleen Embed-type: html',
      },
      mediaBreakpoint: {
        helpText: 'Laat verschillende media asset zien op iedere Breakpoint',
      },
    },
  },
  action: {
    fields: {
      heading: {
        helpText: 'Naam van de actie, zonder punt aan eind',
        name: 'Actie naam',
      },
      description: {
        helpText: 'Omschrijving van de actie, voor zoekmachines',
        name: 'Actie omschrijving',
      },
      page: {
        helpText: 'De pagina waar de actie naar linkt (of gebruik de URL)',
        name: 'Actie paginalink',
      },
      url: {
        helpText: 'De URL waar de actie naar linkt (of gebruik de paginalink)',
        name: 'Actie URL',
      },
      anchor: {
        helpText: 'Voorbeeld: mijn-anchor',
      },
      query: {
        helpText: 'Voorbeeld: &x=1&y=2',
      },
      eventId: {
        helpText: 'Voorbeeld: mijn-event-id',
      },
    },
  },
  navigationSegment: {
    fields: {
      heading: {
        helpText:
          'De naam van dit navigatiesegment. Alleen nodig bij meerdere segmenten.',
        name: 'Navigatiesegment titel',
      },
      actions: {
        helpText: "De pagina's in dit navigatie segment.",
        name: 'Navigatiesegment van Actions',
      },
    },
  },
  navigation: {
    fields: {
      segments: {
        helpText:
          "Een navigatie segment bevat verwijzingen naar pagina's. Navigatie kan worden opgebouwd uit meerdere segmenten.",
        name: 'Navigatie segmenten',
      },
      skipToContentHeading: {
        helpText:
          'Tekst voor schermlezers om direct door te gaan naar de content.',
        name: 'Direct naar content',
      },
      brandAction: {
        helpText: 'Actie die wordt gebruikt voor het logo',
        name: 'Logo actie',
      },
    },
  },
  text: {
    fields: {
      text: {
        helpText: 'Eenvoudig opgemaakte tekstveld met kopjes en afbeeldingen',
        name: 'Tekst',
      },
    },
  },
  pageSection: {
    fields: {
      variation: {
        helpText: 'Hoe de sectie wordt weergegeven',
        name: 'Sectie weergave',
      },
      topics: {
        helpText:
          'Eén of meerder onderwerpen die worden weergegeven in de sectie',
        name: 'Sectie onderwerpen',
      },
      topicOptions: {
        helpText:
          'Deze opties passen de weergave van de onderwerpen in de sectie aan.',
        items: [
          'Verberg actie',
          'Verberg icoon',
          'Verberg media',
          'Verberg tekst',
          'Verberg titel',
          'Draai volgorde om',
        ],
        name: 'Onderwerp opties',
      },
      text: {
        helpText: 'Tekst die wordt weergegeven in de sectie',
        name: 'Sectie tekst',
      },
      navigation: {
        helpText: 'De navigatie die gebruikt wordt in de sectie',
        name: 'Sectie navigatie',
      },
      actions: {
        helpText:
          'Eén of meerdere acties in de sectie. Een actie heeft een eigen naam en kan ook linken naar een extern bron.',
        name: 'Sectie acties',
      },
      eventId: {
        helpText: 'Voorbeeld: mijn-event-id',
      },
    },
  },
  page: {
    fields: {
      path: {
        helpText:
          'Laatste deel van de URL naar deze pagina. Bijvoorbeeld: www.mijnsite.nl/stel-dit-deel-hier-in',
        name: 'Pagina URL',
      },
      sections: {
        helpText: 'Kies de secties die met elkaar deze pagina vormen',
        name: 'Paginasecties',
      },
      theme: {
        helpText: 'Kies het thema voor deze pagina',
        name: 'Paginathema',
      },
      seoTitle: {
        helpText:
          'Titel van de pagina, gebruikt door zoek machines zoals Google',
        name: 'SEO titel',
      },
      seoDescription: {
        helpText:
          'Omschrijving van de pagina, gebruikt door zoek machines zoals Google',
        name: 'SEO omschrijving',
      },
      seoImage: {
        helpText:
          'Afbeelding bij de pagina, wordt meegegeven aan een link en weergegeven door social media',
        name: 'SEO afbeelding',
      },
    },
  },
  globals: {
    fields: {
      siteAuthor: {
        helpText: 'Beschiknaar in alle secties',
        name: 'Site auteur',
      },
      siteDescription: {
        helpText:
          'Omschrijving van de site, gebruikt door zoek machines zoals Google',
        name: 'Site omschrijving',
      },
      siteHeading: {
        helpText: 'Titel van de site, gebruikt door zoek machines zoals Google',
        name: 'Site titel',
      },
      siteKeywords: {
        helpText:
          'Sleutelwoorden voor de site, gebruikt door zoek machines zoals Google',
        name: 'Site sleutelwoorden',
      },
    },
  },
}

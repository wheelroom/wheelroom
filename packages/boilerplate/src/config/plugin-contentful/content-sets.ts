/**
 * Defines the boilerplate content set. In Dutch.
 *
 * The set is build up out of 4 pages: home, product, background and contact.
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
    globals: {
      fields: {
        addressLine1: 'Grote straat 55',
        addressLine2: '1234 AB  Grootendam',
        emailAddress: 'info@grootenmerkbaar.io',
        linkedinUrl: 'n/a',
        phoneNumber: '030-1234567',
        siteAuthor: 'Ad van den autheur',
        siteDescription:
          'Merknamen zijn namen voor producten, diensten of organisaties.',
        siteHeading: 'Deze merknaam is fantastisch',
        siteKeywords: ['merknaam', 'onderwerp', 'onderscheid', 'essentie'],
        title: 'Globale instellingen voor deze site',
      },
      model: 'globals',
    },
    homePage: {
      fields: {
        navigationHeading: 'home',
        heading: 'Deze merknaam is fantastisch',
        image: true,
        abstract:
          "Een merk is een teken om goederen of diensten te onderscheiden. Een merknaam kan daartoe dienen, maar het begrip 'merk' is breder en omvat ook de verschijningsvorm van de naam, het logo en kan ook iets anders zijn dan een naam, bijvoorbeeld een kleur of een beeldmerk.",
        path: '/',
        sections: [
          'homeOpener',
          'merkarchitectuurText',
          'passionQuote',
          'endOfPageLinksLarge',
          'standardFooter',
        ],
        title: 'Home',
      },
      model: 'page',
    },
    homeOpener: {
      fields: {
        boxBackgroundColor: 'green',
        navigation: 'openerNavigatie',
        title: 'Homepagina opener',
        variation: 'home pagina',
      },
      model: 'openerSection',
    },
    openerNavigatie: {
      fields: {
        pages: ['homePage', 'productPage', 'backgroundPage', 'contactPage'],
        title: 'Opener navigatie',
      },
      model: 'navigation',
    },
    productPage: {
      fields: {
        navigationHeading: 'product',
        heading:
          'Een product in economische zin is een tastbare zaak met een bepaalde waarde.',
        image: true,
        abstract:
          'Een product kan worden vergezeld van productinformatie. Voor veel productcategorieën is het beschrijven van het product wettelijk vastgelegd. Zo moeten voedselproducten voorzien zijn van een etiket met de ingrediënten, de inhoud en de houdbaarheidsdatum.',
        path: '/producten',
        sections: [
          'productOpener',
          'productcodeText',
          'buildLoveQuote',
          'merkverwateringText',
          'endOfPageLinks',
          'standardFooter',
        ],
        title: 'Producten',
      },
      model: 'page',
    },
    productOpener: {
      fields: {
        boxBackgroundColor: 'mint',
        navigation: 'openerNavigatie',
        title: 'Productpagina opener',
        variation: 'normale pagina',
      },
      model: 'openerSection',
    },
    backgroundPage: {
      fields: {
        navigationHeading: 'achtergrond',
        heading:
          'Op dit moment is er maar één gemeente in Nederland zonder achtergrond.',
        image: true,
        abstract:
          'In de journalistiek wordt de term achtergrond gebruikt voor de feitelijke en betekenisgevende context waarin het dagelijkse nieuws zich afspeelt.',
        path: '/achtergrond',
        sections: [
          'backgroundOpener',
          'naamcreatieText',
          'careQuote',
          'endOfPageLinks',
          'standardFooter',
        ],
        title: 'Achtergrond',
      },
      model: 'page',
    },
    backgroundOpener: {
      fields: {
        boxBackgroundColor: 'mint',
        navigation: 'openerNavigatie',
        title: 'Achtergrondpagina opener',
        variation: 'normale pagina',
      },
      model: 'openerSection',
    },
    contactPage: {
      fields: {
        navigationHeading: 'contact',
        heading: 'Contact',
        image: true,
        abstract:
          'Communicatie is een activiteit waarbij levende wezens betekenissen uitwisselen door op elkaars signalen te reageren. ',
        path: '/contact',
        sections: [
          'contactOpener',
          'contactText',
          'passionQuote',
          'naamcreatieText',
          'endOfPageLinks',
          'standardFooter',
        ],
        title: 'Contact',
      },
      model: 'page',
    },
    contactOpener: {
      fields: {
        boxBackgroundColor: 'green',
        navigation: 'openerNavigatie',
        title: 'Contactpagina opener',
        variation: 'normale pagina',
      },
      model: 'openerSection',
    },
    contactText: {
      fields: {
        text: `# Communicatie

Bij communicatie wordt informatie met elkaar gedeeld door middel van geluid
(zoals bij spraak en toon) en vorm (zoals beeld, symboliek en tekst). Het
contact omvat ook handelingen want door gedrag worden eindeloos veel
betekenissen kenbaar gemaakt. De impact van (on–)bewuste daden kan heel groot
zijn bij betekenistoekenning: non-verbale communicatie kan zelfs de doorslag
geven boven doelbewust gekozen woorden en symboliek.

## Geloofwaardigheid

Denk aan de (on–)geloofwaardigheid van een gesprekspartner die beweert dat hij
niet nerveus is, maar wel zweet en trilt. Gedrag moet hier ruim worden
uitgelegd: zo kunnen architecten door middel van een bouwwerk mensen imponeren
of juist op hun gemak stellen. De keuze voor de plaats en de gebruikte beweging
of stijl, geweld, mode, muziek en mimiek zijn slechts enkele voorbeelden die met
communicatief handelen c.q. gedrag te maken hebben. Ook door geur, warmte,
licht, kleur, intonatie, smaak en zelfs door pauzes of door te zwijgen kan men
betekenissen versturen en indrukken verkrijgen. Omdat er niet zoiets bestaat als
anti-gedrag, is het onmogelijk om niet te communiceren, stelde de psycholoog
Watzlawick vast.`,
        title: 'Tekst communicatie',
      },
      model: 'textSection',
    },
    productcodeText: {
      fields: {
        text: `# Productcode

Een product kan gekenmerkt worden door een productnummer, ook wel artikelcode
genoemd. Bekende voorbeelden daarvan zijn de barcode of streepjescode EAN en het
ISBN. Hierin wordt een product qua vorm, functie en passendheid uniek
weergegeven (form, fit and function).`,
        title: 'Tekst productcode',
      },
      model: 'textSection',
    },
    merkverwateringText: {
      fields: {
        text: `# Merkverwatering

Merkverwatering is het verschijnsel dat een merknaam van een bepaald product of
dienst zo bekend wordt, dat men in de spreektaal deze naam ook gaat gebruiken om
te refereren aan soortgelijke producten van een ander merk. Deze betiteling is
overigens feitelijk onjuist; niet het merk, maar de merknaam is verwaterd. De
eigenaar van het merk behoudt het unieke recht om de naam als merk te
presenteren. Unilever heeft bijvoorbeeld 'Vaseline' nog altijd als geregistreerd
woordmerk in handen. Concurrenten mogen vaseline alleen onder die naam verkopen
onder een paraplumerk.`,
        title: 'Tekst merkverwatering',
      },
      model: 'textSection',
    },
    merkarchitectuurText: {
      fields: {
        text: `# Merkenarchitectuur

De verschillende merken van een onderneming vormen wat de merkarchitectuur
(Engels: 'brand architecture') wordt genoemd. Soms hebben die merken ook wat
betreft de naam een duidelijke relatie. McDonald's gebruikt bijvoorbeeld voor
verschillende producten het voorvoegsel 'Mc-' (McFlurry, McKroket), evenals
Nestlé (Nescafé, Nesquik, Nespresso).`,
        title: 'Tekst merkarchitectuur',
      },
      model: 'textSection',
    },
    naamcreatieText: {
      fields: {
        text: `# Naamcreatie

Het verzinnen van merknamen wordt 'naamcreatie' of 'naamontwikkeling' genoemd.
Er is in Nederland en België een klein aantal hierin gespecialiseerde bureaus
actief, in navolging van Amerikaanse 'naming agencies'. In het bedenken van
namen gespecialiseerde copywriters heten 'naamcreatieven'.`,
        title: 'Tekst naamcreatie',
      },
      model: 'textSection',
    },
    careQuote: {
      fields: {
        image: true,
        heading: 'Gary Vaynerchuk',
        subHeading: 'Ondernemer, spreker & marketing expert',
        abstract: 'De beste marketing strategie ooit: aandacht.',
        title: 'Quote Gary Vaynerchuk',
      },
      model: 'quoteSection',
    },
    buildLoveQuote: {
      fields: {
        image: true,
        heading: 'Brian Chesky',
        subHeading: 'Cofounder van Airbnb',
        abstract:
          'Bouw iets waar 100 mensen van houden, niet iets dat 1 miljoen mensen een soort van leuk vinden.',
        title: 'Quote Brian Chesky',
      },
      model: 'quoteSection',
    },
    passionQuote: {
      fields: {
        image: true,
        heading: 'Michael Hyatt',
        subHeading: 'Virtual business mentor',
        abstract:
          'Marketing gaat eigenlijk gewoon over het delen van je passie.',
        title: 'Quote Michael Hyatt',
      },
      model: 'quoteSection',
    },
    productPageItem: {
      fields: {
        abstract:
          'Onze producten zijn fantastisch. Deze tekst overschijft de pagina samenvatting.',
        heading: 'Geniale producten',
        link: 'productPage',
        view: 'volledige afbeelding',
        title: 'Tegel productpagina',
      },
      model: 'listItem',
    },
    backgroundPageItem: {
      fields: {
        abstract:
          'Wie zijn wij? Deze tekst overschijft de pagina samenvatting.',
        heading: 'Voorgrond en achterhoofd',
        link: 'backgroundPage',
        view: 'onderkant groen',
        title: 'Tegel achtergrondpagina',
      },
      model: 'listItem',
    },
    contactPageItem: {
      fields: {
        abstract:
          'Omarm de nostalgie. Stuur een fax! Deze tekst overschijft de pagina samenvatting.',
        link: 'contactPage',
        view: 'onderkant mint',
        title: 'Tegel contactpagina',
      },
      model: 'listItem',
    },
    endOfPageLinks: {
      fields: {
        heading: 'Kijk ook eens hier',
        items: ['productPageItem', 'backgroundPageItem', 'contactPageItem'],
        title: 'Referenties klein',
        variation: 'kleine tegels',
      },
      model: 'listSection',
    },
    endOfPageLinksLarge: {
      fields: {
        heading: 'Kijk ook eens hier',
        items: ['productPageItem', 'backgroundPageItem', 'contactPageItem'],
        title: 'Referenties groot',
        variation: 'grote tegels',
      },
      model: 'listSection',
    },
    standardFooter: {
      fields: {
        backgroundColor: 'mint',
        navigation: 'footerNavigatie',
        title: 'Standaard footer',
      },
      model: 'footerSection',
    },
    footerNavigatie: {
      fields: {
        pages: ['productPage', 'backgroundPage', 'contactPage'],
        title: 'Footer navigatie',
      },
      model: 'navigation',
    },
  },
}

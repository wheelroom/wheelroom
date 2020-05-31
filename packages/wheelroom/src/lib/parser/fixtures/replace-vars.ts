import { WheelroomComponent } from '../../../types/wheelroom-components'
import {
  CheckboxField,
  DateField,
  DropdownField,
  LongTextField,
  MediaField,
  MultipleComponentsField,
  NumberField,
  RichTextField,
  ShortTextField,
  SingleComponentField,
  TagsField,
} from '../../../types/wheelroom-fields'

const componentName = 'myDemoComponent'
const fieldName = 'myFieldName'
const fieldType = 'someFieldType'

const component: WheelroomComponent = {
  fields: {
    checkboxField: {
      initialContent: ['check A'],
      items: ['check A', 'check B'],
      type: 'checkbox',
      translations: {
        name: {
          nl: 'Controle vak veld',
        },
        helpText: {
          en: 'Check the box',
          nl: 'Controleer het vak',
        },
        items: { nl: ['vak A', 'vak B'] },
      },
    } as CheckboxField,
    dateField: {
      initialContent: '2020-03-02T04:05+01:00',
      translations: {
        name: {
          nl: 'Datum',
        },
        helpText: {
          en: 'Helptext for date field',
          nl: 'Helptext voor datum',
        },
      },
      type: 'date',
    } as DateField,
    dropdownField: {
      initialContent: 'drop A',
      items: ['drop A', 'drop B'],
      translations: {
        name: {
          nl: 'Opties',
        },
        helpText: {
          en: 'Choose a value',
          nl: 'Maak een keuze',
        },
        items: { nl: ['optie A', 'optie B'] },
      },
      type: 'dropdown',
    } as DropdownField,
    longTextField: {
      initialContent: 'My long text',
      translations: {
        name: {
          nl: 'Lange tekst',
        },
        helpText: {
          en: 'Helptext for long text field',
          nl: 'Helptext voor lange tekst',
        },
      },
      type: 'longText',
    } as LongTextField,
    mediaField: {
      initialContent: true,
      translations: {
        name: {
          nl: 'Afbeelding of video',
        },
        helpText: {
          en: 'Helptext for media field',
          nl: 'Helptext voor media veld',
        },
      },
      type: 'media',
    } as MediaField,
    multipleComponentsField: {
      allowedComponents: ['page'],
      initialContent: ['someMultiplePage'],
      translations: {
        name: {
          nl: 'Meerdere componenten',
        },
        helpText: {
          en: 'Helptext for multiple components field',
          nl: 'Helptext voor meerdere compoenten',
        },
      },
      type: 'multipleComponents',
    } as MultipleComponentsField,
    numberField: {
      initialContent: 5,
      translations: {
        name: {
          nl: 'Nummer',
        },
        helpText: {
          en: 'Helptext for number field',
          nl: 'Helptext voor nummer veld',
        },
      },
      type: 'number',
    } as NumberField,
    richTextField: {
      initialContent: 'My richt text field',
      translations: {
        name: {
          nl: 'Tekst editor',
        },
        helpText: {
          en: 'Helptext for rich text field',
          nl: 'Helptext voor tekst editor',
        },
      },
      type: 'richText',
    } as RichTextField,
    shortTextField: {
      initialContent: 'My short text field',
      translations: {
        name: {
          nl: 'Korte tekst',
        },
        helpText: {
          en: 'Helptext for short text field',
          nl: 'Helptext voor korte tekst',
        },
      },
      type: 'shortText',
    } as ShortTextField,
    singleComponentField: {
      allowedComponents: ['page'],
      initialContent: 'someSinglePage',
      translations: {
        name: {
          nl: 'Enkel component',
        },
        helpText: {
          en: 'Helptext for sinlge component field',
          nl: 'Helptext voor enkel component',
        },
      },
      type: 'singleComponent',
    } as SingleComponentField,
    tagsField: {
      initialContent: ['tag A', 'tag B', 'tag C'],
      type: 'tags',
    } as TagsField,
  },
  modelVersion: '1.0.0',
  settings: {
    asPageSection: true,
    asQuery: 'global',
  },
}

export const replaceVars = {
  component,
  componentName,
  components: {
    testCompA: component,
    testCompB: component,
    testCompC: component,
  },
  fieldName,
  fieldType,
}

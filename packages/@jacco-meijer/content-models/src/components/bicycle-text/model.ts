/**
 * Model definition
 *
 * Component type: bicycleText
 * Wheelroom type: block
 *
 */

import { Model } from '@jacco-meijer/wheelroom-plugin-contentful'

export const model = {
  contentBackend: 'contentful',
  description: 'Bicycle text',
  displayField: 'title',
  fields: {
    title: {
      initialContent: 'Demo bicycleText title',
      settings: {
        helpText: 'Never displayed, only used for listing within Contentful',
      },
      specs: {
        name: 'Title',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    variation: {
      initialContent: 'firstVariation',
      settings: {
        helpText: 'Select variation',
      },
      specs: {
        name: 'Bicycle text variation',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'dropdown',
    },
    // tslint:disable-next-line: object-literal-sort-keys
    addBikeLine: {
      initialContent: 'Demo content for bicycleText/addBikeLine',
      settings: {
        helpText:
          'Variables: ${numberAdded} ${pluralS} ${facilityName} ${availableSpaces}',
      },
      specs: {
        name: 'Bike added line',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    countdownLine: {
      initialContent: 'Demo content for bicycleText/countdownLine',
      settings: {
        helpText:
          'The variable ${counter} will be replaced with the actual counter',
      },
      specs: {
        name: 'Count down line',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    explanation: {
      initialContent: 'Demo content for bicycleText/explanation',
      settings: {
        helpText: 'Short explanation about text representing data updates',
      },
      specs: {
        name: 'Update explanation',
        required: true,
        type: 'Text',
      },
      widgetId: 'multipleLine',
    },
    frequency: {
      initialContent: 60,
      settings: {
        helpText: 'Time in seconds between refreshing data',
      },
      specs: {
        name: 'Update frequency',
        required: true,
        type: 'Integer',
      },
      widgetId: 'numberEditor',
    },
    noChanges: {
      initialContent: 'Demo content for bicycleText/noChanges',
      settings: {
        helpText: 'Text shown when no changes are detected',
      },
      specs: {
        name: 'No changes line',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    refreshing: {
      initialContent: 'Demo content for bicycleText/refreshing',
      settings: {
        helpText: 'Text shown when fething new data',
      },
      specs: {
        name: 'Refreshing line',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
    removeBikeLine: {
      initialContent: 'Demo content for bicycleText/removeBikeLine',
      settings: {
        helpText:
          'Variables: ${numberRemoved} ${pluralS} ${facilityName} ${availableSpaces}',
      },
      specs: {
        name: 'Removed bike line',
        required: true,
        type: 'Symbol',
      },
      widgetId: 'singleLine',
    },
  },
  modelVersion: '1.0.0',
  name: 'Bicycle text',
  type: 'bicycleText',
  wheelroomType: 'block',
} as Model

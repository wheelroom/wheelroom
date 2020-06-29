import {
  DateField,
  DropdownField,
  LongTextField,
  MediaField,
  MultipleComponentsField,
  RichTextField,
  ShortTextField,
  TagsField,
  WheelroomComponents,
} from '@wheelroom/wheelroom'
import { featherIconNames } from '@wheelroom/core'

export const blogModels: WheelroomComponents = {
  blog: {
    fields: {
      heading: {
        type: 'shortText',
      } as ShortTextField,
      abstract: {
        type: 'longText',
      } as LongTextField,
      media: {
        type: 'media',
      } as MediaField,
      icon: {
        items: featherIconNames,
        type: 'dropdown',
      } as DropdownField,
      slug: {
        initialContent: 'initial-content-for-slug',
        required: true,
        type: 'shortText',
        typePostfix: 'Slug',
        unique: true,
      } as ShortTextField,
      date: {
        required: true,
        type: 'date',
      } as DateField,
      text: {
        required: true,
        type: 'richText',
      } as RichTextField,
      categories: {
        type: 'tags',
      } as TagsField,
      authors: {
        allowedComponents: ['topic'],
        type: 'multipleComponents',
      } as MultipleComponentsField,
      seoTitle: {
        type: 'shortText',
      } as ShortTextField,
      seoDescription: {
        maxLength: 155,
        type: 'shortText',
      } as ShortTextField,
      seoImage: {
        type: 'media',
        typePostfix: 'Image',
      } as MediaField,
      seoKeywords: {
        type: 'tags',
      } as TagsField,
    },
    modelVersion: '1.0.0',
    settings: {
      asFragment: true,
      asQuery: 'subPage',
    },
  },
  blogSection: {
    fields: {
      variation: {
        items: ['blog', 'list'],
        type: 'dropdown',
      } as DropdownField,
      eventId: {
        type: 'shortText',
        initialContent: 'initial-content-for-blog-section-event-id',
        typePostfix: 'Slug',
        helpText: 'Example: my-event-id',
        unique: true,
      } as ShortTextField,
    },
    modelVersion: '1.0.0',
    settings: {
      // asPageSection will create boilerplate code
      asBoilerplate: false,
      asFragment: true,
      asPageSection: true,
    },
  },
}

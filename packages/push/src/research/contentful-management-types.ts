import {
  BasicMetaSysProps,
  ContentFields,
  ContentTypeFieldValidation,
  ContentTypeProps,
  Editor,
  EditorInterfaceProps,
  FieldType,
  SysLink,
} from 'contentful-management/types'

const basicSys: BasicMetaSysProps = {
  type: '',
  id: '',
  version: 0,
  createdAt: '',
  updatedAt: '',
}

const sysLink: SysLink = {
  sys: {
    type: '',
    linkType: '',
    id: '',
  },
}

const sys = {
  ...basicSys,
  space: sysLink,
  environment: sysLink,
  contentType: sysLink,
}

const fieldValidation: ContentTypeFieldValidation = {
  linkContentType: ['type1', 'type2'],
  in: ['in1', 'in2'],
  linkMimetypeGroup: ['group1', 'group2'],
  enabledNodeTypes: ['node1', 'node2'],
  enabledMarks: ['marks1', 'marks2'],
  unique: true,
  size: { min: 1, max: 2 },
  range: { min: 1, max: 2 },
}

const headingField: ContentFields & FieldType = {
  id: 'heading',
  type: 'Symbol',
  name: 'heading',
  required: false,
  localized: false,
  items: { type: 'Symbol' } as FieldType,
  validations: [fieldValidation],
  initialValue: { key: 'value' },
}

export const contentType: ContentTypeProps = {
  sys,
  name: 'Topic',
  description: 'This is a topic type',
  displayField: 'Topic',
  fields: [headingField],
}

export type WidgetID =
  | 'assetLinkEditor'
  | 'assetLinksEditor'
  | 'assetGalleryEditor'
  | 'boolean'
  | 'datePicker'
  | 'entryLinkEditor'
  | 'entryLinksEditor'
  | 'entryCardEditor'
  | 'entryCardsEditor'
  | 'numberEditor'
  | 'rating'
  | 'locationEditor'
  | 'objectEditor'
  | 'urlEditor'
  | 'slugEditor'
  | 'listInput'
  | 'checkbox'
  | 'tagEditor'
  | 'multipleLine'
  | 'markdown'
  | 'singleLine'
  | 'dropdown'
  | 'radio'
  | 'richTextEditor'

const editor: Editor = {
  widgetId: 'singleLine' as WidgetID,
  widgetNamespace: 'Single line',
}

export const editorInterface: EditorInterfaceProps = {
  sys,
  editor,
}

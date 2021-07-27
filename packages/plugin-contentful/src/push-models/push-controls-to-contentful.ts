import { ContentType, Control } from 'contentful-management/types'

export interface PushControlsToContentful {
  controls: Control[]
  contentType: ContentType
}

export const pushControlsToContentful = async ({
  controls,
  contentType,
}: PushControlsToContentful) => {
  const editorInterface = await contentType.getEditorInterface()
  editorInterface.controls = controls
  await editorInterface.update()
}

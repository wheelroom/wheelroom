import chalk from 'chalk'
import { ContentType, Control } from 'contentful-management/types'

export interface PushControlsToContentful {
  controls: Control[]
  contentType: ContentType
}

export const pushControlsToContentful = async ({
  controls,
  contentType,
}: PushControlsToContentful) => {
  console.log(chalk.red(`Contentful API, updating editor interface`))
  const editorInterface = await contentType.getEditorInterface()
  editorInterface.controls = controls
  await editorInterface.update()
}

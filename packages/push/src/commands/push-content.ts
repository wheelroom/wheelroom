export interface PushContent {
  file: string
}

export const pushContent = async ({ file }: PushContent) => {
  console.log(`push content, file:${file}`)
}

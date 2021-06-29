export interface PushContent {
  file: string
}

export const pushContent = ({ file }: PushContent) => {
  console.log(`push content, file:${file}`)
}

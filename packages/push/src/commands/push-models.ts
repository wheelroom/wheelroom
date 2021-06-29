export interface PushModels {
  file: string
}

export const pushModels = ({ file }: PushModels) => {
  console.log(`push models, file:${file}`)
}

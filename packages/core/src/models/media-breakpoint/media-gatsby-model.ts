export interface MediaGatsbyModel {
  title: string
  description: string
  fluid?: {
    base64: any
    aspectRatio: any
    src: string
    srcSet: any
    sizes: any
  }
  file?: {
    url: string
    fileName: string
    contentType: string
    details: {
      image: {
        height: number
        width: number
      }
    }
  }
}

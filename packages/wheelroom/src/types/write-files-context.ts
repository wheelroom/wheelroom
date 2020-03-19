export interface WriteFileListItem {
  content: string
  basePath: string
  relPath: string
}

export type WriteFileList = WriteFileListItem[]

export interface WriteFilesContext {
  fileList: WriteFileList
  dryRun?: boolean | undefined
  yes?: boolean | undefined
}

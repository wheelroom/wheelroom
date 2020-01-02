export type OverwritePolicy = 'y' | 'n' | 'a' | 'q' | undefined

export interface WriteFileContext {
  content: string
  dryRun?: boolean
  fileName: string
  filePath: string
  lastOverwritePolicy: OverwritePolicy
  yes?: boolean
}

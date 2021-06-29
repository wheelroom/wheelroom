import ts from 'typescript'

export interface IsExportedNode {
  node: ts.Node
}
export const isExportedNode = ({ node }: IsExportedNode): boolean => {
  return (
    (ts.getCombinedModifierFlags(node as ts.Declaration) &
      ts.ModifierFlags.Export) !==
      0 ||
    (!!node.parent && node.parent.kind === ts.SyntaxKind.SourceFile)
  )
}

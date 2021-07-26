import ts from 'typescript'

export interface IsExportedDeclaration {
  node: ts.Node
}
export const isExportedDeclaration = ({
  node,
}: IsExportedDeclaration): boolean => {
  return (
    (ts.getCombinedModifierFlags(node as ts.Declaration) &
      ts.ModifierFlags.Export) !==
      0 ||
    (!!node.parent && node.parent.kind === ts.SyntaxKind.SourceFile)
  )
}

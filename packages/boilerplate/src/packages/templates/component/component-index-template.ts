export const componentIndexTemplate = (vars: any) => `/**
 * Component index
 *
 * Component type: ${vars.componentType}
 * Wheelroom type: ${vars.wheelroomType}
 *
 */

export * from './${vars.componentFileName}'
`

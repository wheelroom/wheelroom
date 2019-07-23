import { Vars } from '../types/vars'

export const demo = (vars: Vars) =>
  `# Demo
## About

The component name is: ${vars.componentName.camelCase}
`

import { Vars } from '../../../create-new-model'

export const configReadmeTemplate = (vars: Vars) =>
  `## ${vars.componentClassName}

Wheelroom type: ${vars.wheelroomType}

## Component fields

${vars.fieldsList}

`

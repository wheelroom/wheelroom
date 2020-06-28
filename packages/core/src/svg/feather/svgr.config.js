/* eslint-disable */
path = require('path')
svgrCliUtil = require('@svgr/cli/lib/util')
module.exports = {
  expandProps: false,
  svgProps: {
    id: '{componentId}',
    stroke: 'currentColor',
    strokeWidth: '{strokeWidth}',
    width: '100%',
  },
  template(
    { template },
    opts,
    { imports, componentName, props, jsx, exports }
  ) {
    const typeScriptTpl = template.smart({ plugins: ['typescript'] })
    return typeScriptTpl.ast`
    import React, { SVGProps } from 'react'
    
    const componentId = '${svgrCliUtil.transformFilename(
      opts.state.componentName,
      'kebab'
    )}';
    export const ${componentName} = (props: SVGProps<SVGSVGElement>) => {
      const strokeWidth = props.strokeWidth || 2
      return ${jsx};
    }
  `
  },
  indexTemplate(files) {
    const exportEntries = files.map((file) => {
      const basename = path.basename(file, path.extname(file))
      return `export * from './${basename}'`
    })
    return exportEntries.join('\n') + `\n`
  },
}
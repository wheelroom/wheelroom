/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
'use strict'

const readPkg = require('read-pkg')
const writePkg = require('write-pkg')

const scriptName = 'sync-wheelroom-version'

async function syncVersion() {
  try {
    const packageJson = await readPkg({ normalize: false })
    packageJson.wheelroom.version = packageJson.version
    await writePkg(packageJson)
  } catch (err) {
    process.exit(1)
  }
}

;(async () => {
  console.log(`${scriptName}: running...`)
  await syncVersion()
  console.log(`${scriptName}: done`)
})()

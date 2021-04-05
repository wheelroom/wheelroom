/**
 * - Bump version of root
 * - Sync versions of all packages
 * - Update all dependencies that use the packages
 * - Copy files to build folder
 * -
 */
import { spawn } from 'child_process'
import fs from 'fs'

const logStream = async ({ stream }) => {
  for await (const data of stream) {
    process.stdout.write(data)
  }
}
const readPackageSync = ({ file }) => {
  const data = fs.readFileSync(file, 'utf8')
  return JSON.parse(data)
}
const writePackageSync = ({ pkg }) => {
  const data = JSON.stringify(pkg, null, 2)
  fs.writeFileSync('./user.json', data, 'utf8')
}
const buildTask = async ({ cmd, args, cwd }) => {
  console.log(`==> (${cwd}) ${cmd} ${args.join(' ')}`)
  const child = spawn(cmd, args, { cwd })
  await Promise.all([
    logStream({ stream: child.stdout }),
    logStream({ stream: child.stderr }),
  ])
}
const updatePackage = ({ rootPkg, destPkg }) => {
  const result = Object.assign({}, destPkg)
  destPkg.keywords = rootPkg.keywords
  destPkg.homepage = rootPkg.homepage
  destPkg.bugs = rootPkg.bugs
  destPkg.repository = rootPkg.repository
  destPkg.license = rootPkg.license
  destPkg.author = rootPkg.author
  destPkg.contributors = rootPkg.contributors
  destPkg.engines = rootPkg.engines
  destPkg.publishConfig = rootPkg.publishConfig
  return result
}
const copyFilesSync = async ({ fromPath, toPath }) => {
  let fileName
  fileName = 'package.json'
  fs.copyFileSync(`${fromPath}/${fileName}`, `${toPath}/${fileName}`)
  fileName = 'CHANGELOG.md'
  fs.copyFileSync(`${fromPath}/${fileName}`, `${toPath}/${fileName}`)
  fileName = 'README.md'
  fs.copyFileSync(`${fromPath}/${fileName}`, `${toPath}/${fileName}`)
}

const main = async () => {
  console.log('Releasing root package')
  await buildTask({ cmd: 'npm', args: ['run', 'release'], cwd: '.' })
  console.log('Updating package with root package')
  const rootPkg = readPackageSync({ file: './package.json' })
  const destPkg = readPackageSync({ file: './packages/any/package.json' })
  const newDestPkg = updatePackage({ rootPkg, destPkg })
  writePackageSync({ pkg: newDestPkg })
  console.log('Releasing package with version', rootPkg.version)
  await buildTask({
    cmd: 'npm',
    args: ['run', 'release', '--', '--release-as', rootPkg.version],
    cwd: './packages/any',
  })
  console.log('Building package')
  await buildTask({ cmd: 'npm', args: ['run', 'build'], cwd: './packages/any' })
  console.log('Copying files')
  copyFilesSync({ fromPath: './packages/any', toPath: './packages/any/build' })
  console.log('Publishing package')
  await buildTask({
    cmd: 'npm',
    args: ['publish'],
    cwd: './packages/any/build',
  })
}

main()

import { existsSync, readFileSync, writeFileSync } from 'fs'
import semver from 'semver'
import { MakeContext } from '../lib/get-make-context'
import { ArboristNode, updateEdgesOut } from '../lib/arborist'
import { bumpVersion, callConventionalChangelog } from '../lib/conventional'
import { writeNodeSync } from '../lib/filesystem'
import { cmdRun } from '../lib/child-process'

export interface VersionMakeContext {
  makeContext: MakeContext
}

export const versionTarget = async ({ makeContext }: VersionMakeContext) => {
  const { rootNode, targetNode } = makeContext
  const path = targetNode.path
  const recommendation = await bumpVersion({ path })
  const { releaseType } = recommendation
  const newVersion = semver.inc(
    rootNode.package.version,
    releaseType as semver.ReleaseType
  )
  console.log(`${recommendation.reason} => ${recommendation.releaseType}`)
  console.log(
    `root:${rootNode.package.version}/package:${targetNode.package.version} => ${newVersion}`
  )
  targetNode.package.version = newVersion
}

export const versionDependencies = async ({
  makeContext,
}: VersionMakeContext) => {
  const { rootNode, targetNode, buildNodes } = makeContext
  const fsChildrenPlusRoot = new Set(rootNode.fsChildren) as Set<ArboristNode>
  fsChildrenPlusRoot.add(rootNode as ArboristNode)

  // Update packages with target node version
  fsChildrenPlusRoot.forEach(
    (node: ArboristNode) => (node.package.version = targetNode.package.version)
  )
  // Make packages depend on new version of package
  for (const buildNode of buildNodes) {
    updateEdgesOut({ node: buildNode, fsChildren: fsChildrenPlusRoot })
  }
  // Write all changes to all nodes
  fsChildrenPlusRoot.forEach((node: ArboristNode) => writeNodeSync({ node }))

  // Update package-lock.json
  await cmdRun({ cmd: 'npm', args: ['install'], node: rootNode })
}

export const getNewChangelog = async ({ makeContext }: VersionMakeContext) => {
  const { targetNode } = makeContext
  const path = targetNode.path
  const newVersion = targetNode.package.version
  makeContext.newChangeLog = await callConventionalChangelog({
    path,
    newVersion,
  })
}

export const writeNewChangelog = async ({
  makeContext,
}: VersionMakeContext) => {
  const { targetNode } = makeContext
  const changelogFile = `${targetNode.path}/CHANGELOG.md`
  if (!existsSync(changelogFile)) {
    writeFileSync(changelogFile, '\n', 'utf8')
  }
  const changelogContent = readFileSync(changelogFile, 'utf-8')
  const headerLength = changelogContent.search(
    /(^#+ \[?[0-9]+\.[0-9]+\.[0-9]+)/m
  )
  const existingChangelog = changelogContent.substring(headerLength)
  writeFileSync(
    changelogFile,
    `# Changelog\n\n${makeContext.newChangeLog}${existingChangelog}`,
    'utf8'
  )
}

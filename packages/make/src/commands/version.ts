import { existsSync, readFileSync, writeFileSync } from 'fs'
import semver from 'semver'
import { MakeContext } from '../get-make-context'
import {
  ArboristNode,
  writeNodeSync,
  // commitTypes,
  updateEdgesOut,
  cmdRun,
  bumpVersion,
  callConventionalChangelog,
} from '../npm'

export interface VersionMakeContext {
  makeContext: MakeContext
}

export const versionTarget = async ({ makeContext }: VersionMakeContext) => {
  const { rootNode, targetNode } = makeContext
  // const tagPrefix = `${targetNode.package.name}@`
  const path = targetNode.path
  const recommendation = await bumpVersion({ /** tagPrefix */ path })
  const { releaseType } = recommendation
  const newVersion = semver.inc(
    rootNode.package.version,
    releaseType as semver.ReleaseType
  )
  console.log(`${recommendation.releaseType}: ${recommendation.reason}`)
  console.log(
    `root:${rootNode.package.version}/package:${targetNode.package.version} => ${newVersion}`
  )
  targetNode.package.version = newVersion
}

export const getNewChangelog = async ({ makeContext }: VersionMakeContext) => {
  const { targetNode } = makeContext
  // const tagPrefix = `${targetNode.package.name}@`
  const path = targetNode.path
  const newVersion = targetNode.package.version
  makeContext.newChangeLog = await callConventionalChangelog({
    path,
    newVersion,
    // tagPrefix,
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

export const versionDependencies = async ({
  makeContext,
}: VersionMakeContext) => {
  const { rootNode, targetNode, buildNodes } = makeContext
  // Update root package version with released target
  rootNode.package.version = targetNode.package.version
  const fsChildrenPlusRoot = new Set(rootNode.fsChildren) as Set<ArboristNode>
  fsChildrenPlusRoot.add(rootNode as ArboristNode)

  // Make packages depend on new version of package
  for (const buildNode of buildNodes) {
    updateEdgesOut({ node: buildNode, fsChildren: fsChildrenPlusRoot })
  }

  // Write all changes to all nodes
  fsChildrenPlusRoot.forEach((node: ArboristNode) => writeNodeSync({ node }))

  // Update package-lock.json
  await cmdRun({ cmd: 'npm', args: ['install'], node: rootNode })
}

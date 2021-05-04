import { existsSync, readFileSync, writeFileSync } from 'fs'
import semver from 'semver'
import { MakeContext } from './get-make-context'
import { ArboristNode, updateEdgesOut } from './arborist'
import { bumpVersion, callConventionalChangelog } from './conventional'
import { writeNodeSync } from './filesystem'
import { cmdRun } from './child-process'

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
  for (const buildNode of [rootNode, ...buildNodes]) {
    buildNode.package.version = targetNode.package.version
  }
  // Make packages depend on new version of package
  for (const buildNode of buildNodes) {
    updateEdgesOut({ node: buildNode, fsChildren: fsChildrenPlusRoot })
  }
  // Write all changes to all nodes
  fsChildrenPlusRoot.forEach((node: ArboristNode) => writeNodeSync({ node }))

  // Update package-lock.json
  await cmdRun({ cmd: 'npm', args: ['install'], node: rootNode })
}

export const getNewChangelogs = async ({ makeContext }: VersionMakeContext) => {
  const { buildNodes } = makeContext
  for (const buildNode of buildNodes) {
    const path = buildNode.path
    // Package version must have been set to new version
    const newVersion = buildNode.package.version
    const packageName = buildNode.package.name
    makeContext.newChangeLogs[packageName] = await callConventionalChangelog({
      path,
      newVersion,
    })
  }
}

const createFileIfNotExists = (fileName: string) => {
  if (!existsSync(fileName)) {
    writeFileSync(fileName, '\n', 'utf8')
  }
}

export const writeNewChangelogs = async ({
  makeContext,
}: VersionMakeContext) => {
  const { buildNodes } = makeContext
  for (const buildNode of buildNodes) {
    const changelogFile = `${buildNode.path}/CHANGELOG.md`
    createFileIfNotExists(changelogFile)
    const changelogContent = readFileSync(changelogFile, 'utf-8')
    const headerLength = changelogContent.search(
      /(^#+ \[?[0-9]+\.[0-9]+\.[0-9]+)/m
    )
    const existingChangelog = changelogContent.substring(headerLength)
    writeFileSync(
      changelogFile,
      `# Changelog\n\n${
        makeContext.newChangeLogs[buildNode.package.name]
      }${existingChangelog}`,
      'utf8'
    )
  }
}

export const writeRootRelease = async ({ makeContext }: VersionMakeContext) => {
  const { rootNode, buildNodes, newChangeLogs } = makeContext
  const rootReleaseFile = `${rootNode.path}/RELEASE.md`
  createFileIfNotExists(rootReleaseFile)
  const packageChanges = buildNodes.map(
    (buildNode) =>
      `## ${buildNode.package.name} ${buildNode.package.version}\n\n${
        newChangeLogs[buildNode.package.name]
      }\n`
  )
  const newContent = `# Release ${
    rootNode.package.version
  }\n\n${packageChanges.join('\n')}`
  writeFileSync(rootReleaseFile, newContent, 'utf8')
}

export const writeRootChangelog = async ({
  makeContext,
}: VersionMakeContext) => {
  const { rootNode } = makeContext
  const rootChangelogFile = `${rootNode.path}/CHANGELOG.md`
  const releaseFile = `${rootNode.path}/RELEASE.md`
  createFileIfNotExists(rootChangelogFile)
  const changelogContent = readFileSync(rootChangelogFile, 'utf-8')
  const releaseContent = readFileSync(releaseFile, 'utf-8')
  const headerLength = changelogContent.search(/(^# Release)/m)
  const existingChangelog = changelogContent.substring(headerLength)
  writeFileSync(
    rootChangelogFile,
    `# Changelog\n\n${releaseContent}${existingChangelog}`,
    'utf8'
  )
}

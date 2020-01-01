/**
 *
 * Use Wheelroom parser and parse these variables intended for initial content
 * =========================
 * - %firstInValidation%
 * - %firstlinkContentTypeValidation%
 * - %demoAsset%
 *
 */

import { parser as wheelroomParser } from '@jacco-meijer/wheelroom'

export const parser = ({
  componentName,
  fieldName,
  unparsed,
}: {
  componentName: string
  fieldName: string
  unparsed: string
}): string => {
  const wheelroomParsed = wheelroomParser({
    componentName,
    fieldName,
    unparsed,
  })
  return wheelroomParsed
}

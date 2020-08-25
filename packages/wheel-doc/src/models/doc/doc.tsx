/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Box, Flex, Heading, Wheel } from '@wheelroom/core'
import { RichText } from '@wheelroom/wheel-text'
import { DocData } from './data'
import { DocModel } from './model'
import { DocSectionDocVariationNcssTree } from './ncss-tree'

interface DocWheel extends Wheel {
  style: DocSectionDocVariationNcssTree
}

interface DocProps {
  /** Styling wheel */
  wheel: DocWheel
  /** Locale needed for rich text render */
  locale: string
  /** Doc props to render */
  doc: DocModel
  /** Data wheel */
  data: DocData
}

export const Doc = (props: DocProps) => {
  if (!props.doc) {
    return null
  }
  return (
    <Box is="article" wheel={{ ...props.wheel, style: props.wheel.style }}>
      {!props.data.hideHeader && (
        <Flex
          is="header"
          wheel={{ ...props.wheel, style: props.wheel.style.header }}
        >
          {!props.data.hideHeading && (
            <Heading
              is="h1"
              wheel={{
                ...props.wheel,
                style: props.wheel.style.heading,
              }}
            >
              {props.doc.heading}
            </Heading>
          )}
        </Flex>
      )}
      {!props.data.hideRichText && (
        <RichText
          locale={props.locale}
          wheel={{ ...props.wheel, style: props.wheel.style.richText }}
          textJson={props.doc.text.json}
        />
      )}
    </Box>
  )
}

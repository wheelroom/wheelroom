/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Fragment } from 'react'
import { Action, Box, Flex, Heading, Wheel } from '@wheelroom/core'
import { RichText } from '@wheelroom/wheel-text'
import { DocsData } from './data'
import { DocsModel } from './model'
import { DocsSectionDocsVariationNcssTree } from './ncss-tree'

interface DocsWheel extends Wheel {
  style: DocsSectionDocsVariationNcssTree
}

interface DocsProps {
  /** Styling wheel */
  wheel: DocsWheel
  /** Locale needed for rich text render */
  locale: string
  /** Docs props to render */
  docs: DocsModel
  /** Data wheel */
  data: DocsData
}

export const Docs = (props: DocsProps) => {
  if (!props.docs) {
    return null
  }
  return (
    <Box is="article" wheel={{ ...props.wheel, style: props.wheel.style }}>
      {!props.data.hideHeader && (
        <Flex
          is="header"
          wheel={{ ...props.wheel, style: props.wheel.style.header }}
        >
          {!props.data.hideBreadcrumb && (
            <Box
              is="nav"
              wheel={{ ...props.wheel, style: props.wheel.style.breadcrumb }}
            >
              <Action
                hideIcon={true}
                url="/"
                wheel={{
                  ...props.wheel,
                  style: props.wheel.style.breadcrumbAction,
                }}
              >
                Home
              </Action>
              <Box
                is="span"
                role="presentation"
                wheel={{
                  ...props.wheel,
                  style: props.wheel.style.breadcrumbSpacer,
                }}
              >
                &rsaquo;
              </Box>
              <Action
                hideIcon={true}
                url="/docs"
                wheel={{
                  ...props.wheel,
                  style: props.wheel.style.breadcrumbAction,
                }}
              >
                Docs
              </Action>
              {props.docs.parentDocs && (
                <Fragment>
                  <Box
                    is="span"
                    role="presentation"
                    wheel={{
                      ...props.wheel,
                      style: props.wheel.style.breadcrumbSpacer,
                    }}
                  >
                    &rsaquo;
                  </Box>
                  <Action
                    hideIcon={true}
                    url={`/docs/` + props.docs.parentDocs.slug}
                    wheel={{
                      ...props.wheel,
                      style: props.wheel.style.breadcrumbAction,
                    }}
                  >
                    {props.docs.parentDocs.heading}
                  </Action>
                </Fragment>
              )}
              <Box
                is="span"
                role="presentation"
                wheel={{
                  ...props.wheel,
                  style: props.wheel.style.breadcrumbSpacer,
                }}
              >
                &rsaquo;
              </Box>
              <Box
                is="span"
                wheel={{
                  ...props.wheel,
                  style: props.wheel.style.breadcrumbCurrent,
                }}
              >
                {props.docs.heading}
              </Box>
            </Box>
          )}
          {!props.data.hideHeading && (
            <Heading
              is="h1"
              wheel={{
                ...props.wheel,
                style: props.wheel.style.heading,
              }}
            >
              {props.docs.heading}
            </Heading>
          )}
        </Flex>
      )}
      {!props.data.hideRichText && (
        <RichText
          locale={props.locale}
          wheel={{ ...props.wheel, style: props.wheel.style.richText }}
          textJson={props.docs.text.json}
        />
      )}
    </Box>
  )
}

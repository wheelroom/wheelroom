import { useEffect, useState } from 'react'
import { createPagePreview } from '@jacco-meijer/contentful-page-preview'
import React from 'react'
import { Flex } from '../../views/core-elements/grid'
import { heading4Style } from '../../styles/heading'
import { Spinner } from '../../views/spinner/spinner'
import queryString from 'query-string'
import { PreviewSecrets } from '@jacco-meijer/contentful-page-preview'
import { useLocation } from '@reach/router'

export const inPreviewMode = (): boolean => {
  const queryParams = queryString.parse(useLocation().search)
  return 'preview' in queryParams
}

export const getPreviewQueryString = (): string => {
  if (inPreviewMode()) {
    return '?preview'
  } else {
    return ''
  }
}

interface PreviewUpdateButtonProps {
  setPreviewPage: (fetchedPage: any) => any
  previewSecrets: PreviewSecrets
  entryId: string
}

export const PreviewUpdateButton = (props: PreviewUpdateButtonProps) => {
  const [loading, setLoading] = useState(false)
  if (!inPreviewMode()) {
    return null
  }

  async function getPreviewPage() {
    setLoading(true)
    const pagePreview = createPagePreview({
      entryId: props.entryId,
      previewSecrets: props.previewSecrets,
    })
    const fetchedPage = await pagePreview.getGatbsyFields()
    props.setPreviewPage(fetchedPage)
    setLoading(false)
  }

  useEffect(() => {
    getPreviewPage()
  }, [])
  return (
    <Flex
      onClick={getPreviewPage}
      ncss={{
        ...heading4Style,
        alignItems: 'center',
        bg: 'cyan',
        borderColor: 'green',
        borderRadius: '10px',
        borderStyle: 'solid',
        borderWidth: 4,
        cursor: 'pointer',
        height: '70px',
        justifyContent: 'center',
        p: 2,
        position: 'fixed',
        right: '30px',
        top: '30px',
        width: '150px',
      }}
    >
      {loading ? <Spinner /> : 'Update'}
    </Flex>
  )
}

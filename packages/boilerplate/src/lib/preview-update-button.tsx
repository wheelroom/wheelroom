import { useEffect, useState } from 'react'
import { getContentfulPagePreview } from '@jacco-meijer/contentful-page-preview'
import React from 'react'
import { Flex } from '../views/core-elements/grid'
import { heading4Style } from '../styles/heading'
import { Spinner } from '../views/spinner/spinner'
import queryString from 'query-string'
import { PreviewSecrets } from '@jacco-meijer/contentful-page-preview'

interface PreviewUpdateButtonProps {
  setPreviewPage: (fetchedPage: any) => any
  previewSecrets: PreviewSecrets
  searchQuery: string
}

export const PreviewUpdateButton = (props: PreviewUpdateButtonProps) => {
  const [loading, setLoading] = useState(false)

  const queryParams = queryString.parse(props.searchQuery)
  if (!('preview' in queryParams)) {
    return null
  }
  if (!(queryParams.preview && typeof queryParams.preview === 'string')) {
    return null
  }
  const entryId = queryParams.preview

  async function getPreviewPage() {
    setLoading(true)
    const fetchedPage = await getContentfulPagePreview({
      previewSecrets: props.previewSecrets,
      entryId,
    })
    props.setPreviewPage(fetchedPage)
    console.log(fetchedPage)
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
        width: '100px',
      }}
    >
      {loading ? <Spinner /> : 'Update'}
    </Flex>
  )
}

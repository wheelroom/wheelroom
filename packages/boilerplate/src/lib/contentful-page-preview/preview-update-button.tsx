import { useEffect, useState } from 'react'
import { contentfulPagePreview } from './contentful-page-preview'
import React from 'react'
import { Flex } from '../../views/core-elements/grid'
import { heading4Style } from '../../styles/heading'
import { Spinner } from '../../views/spinner/spinner'
import queryString from 'query-string'

interface PreviewUpdateButtonProps {
  pageTemplateProps: any
  setPreviewPage: (fetchedPage: any) => any
}

export const PreviewUpdateButton = (props: PreviewUpdateButtonProps) => {
  const [loading, setLoading] = useState(false)

  const queryParams = queryString.parse(props.pageTemplateProps.location.search)
  if (!('preview' in queryParams)) {
    return null
  }
  if (!(queryParams.preview && typeof queryParams.preview === 'string')) {
    return null
  }
  const entryId = queryParams.preview

  async function getPreviewPage() {
    setLoading(true)
    const fetchedPage = await contentfulPagePreview(
      props.pageTemplateProps,
      entryId
    )
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
        position: 'absolute',
        right: '30px',
        top: '30px',
        width: '100px',
      }}
    >
      {loading ? <Spinner /> : 'Update'}
    </Flex>
  )
}

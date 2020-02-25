import { PageProps } from '../components/page/page'
import { FluidImage } from '../views/image/image'

// In order to supply an image tag for a page, find the image associated with
// the opener section of the page.

export const getOpenerOrPageImage = (page: PageProps): FluidImage => {
  let openerImage
  // Do we have an image in ContentfulOpenerSection?
  for (const section of page.sections) {
    if (
      section.__typename === 'ContentfulOpenerSection' &&
      'image' in section
    ) {
      openerImage = section.image
    }
  }
  if (openerImage) {
    return openerImage
  }
  return page.image
}

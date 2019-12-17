// In order to supply an image tag for a page, find the image associated with
// the opener section of the page.

export const getPageImage = (page: any, sectionTypeName: string) => {
  for (const section of page.sections) {
    if (section.__typename === sectionTypeName) {
      if (!section.image) {
        return
      }
      return section.image.fluid.src
    }
  }
}

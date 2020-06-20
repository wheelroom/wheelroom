import { SectionWheels } from './section-wheels'
import { Wheel } from './wheel'

export interface GetWheel {
  sectionWheels: SectionWheels
  wheelId: string
  variation: string
  themeId: string
}

export const getWheel = (params: GetWheel): Wheel => {
  return {} as Wheel
}

import { DeepPartial } from '@wheelroom/core'
import { TableSectionData } from '@wheelroom/wheel-table'

// Topic Table data is using the Topic data structure
const topicTableData = {
  hideAbstract: false,
  hideActions: false,
  hideContent: false,
  hideHeading: false,
  hideIcon: false,
  hideMedia: false,
  hideText: false,
}

export const tableSectionData: DeepPartial<TableSectionData> = {
  table: {
    topic: topicTableData,
  },
  price: {
    topic: topicTableData,
  },
}

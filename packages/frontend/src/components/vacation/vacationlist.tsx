import { useMemo } from 'react'
import { Table } from '@/atoms/form'

const VacationList = () => {
  const columnDefs = useMemo(() => {
    return [
      {
        headerName: 'Date Range',
        flex: 1,
      },
      {
        headerName: 'No of Days',
        flex: 1,
      },
      {
        headerName: 'Leave Type',
        flex: 1,
      },
      {
        headerName: 'Approver',
        flex: 1,
      },
      {
        headerName: 'Status',
        flex: 1,
      },
      {
        headerName: 'Remarks',
        flex: 1,
      },
    ]
  }, [])
  return (
    <Table
      columnDefs={columnDefs}
      rowData={[]}
      domLayout='autoHeight'
      suppressHorizontalScroll={true}
    />
  )
}

export default VacationList

import { AgGridReact, AgGridReactProps } from 'ag-grid-react'
import { styled } from 'styled-components'
import { ReactComponent as NoRowsIcon } from '@/assets/svg/no-rows-icon.svg'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

const Container = styled.div`
  & .ag-header-row {
    height: 30px !important;
  }
`

const NoRowDataComponent = () => {
  return (
    <div className='flex w-[150px] h-[150px]'>
      <NoRowsIcon />
    </div>
  )
}

const Table = (props: AgGridReactProps) => {
  return (
    <Container className='ag-theme-alpine w-full h-full'>
      <AgGridReact
        animateRows
        noRowsOverlayComponent={NoRowDataComponent}
        {...props}
      />
    </Container>
  )
}

export default Table

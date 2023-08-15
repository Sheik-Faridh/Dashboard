import { AgGridReact, AgGridReactProps } from 'ag-grid-react'
import { styled } from 'styled-components'
import Lottie from 'lottie-react'
import NoDataAnimation from '@/assets/animation/no_data.json'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

const Container = styled.div`
  & .ag-root-wrapper {
    border: none;
  }
  & .ag-header {
    border: none;
  }
  & .ag-header-row {
    height: 30px !important;
  }
`

const NoRowDataComponent = () => {
  return (
    <div className='flex'>
      <Lottie
        className='w-[200px] h-[200px] relative bottom-[15px]'
        animationData={NoDataAnimation}
        loop={true}
      />
    </div>
  )
}

const Table = (props: AgGridReactProps) => {
  return (
    <Container className='ag-theme-alpine w-full h-full shadow-lg'>
      <AgGridReact
        animateRows
        noRowsOverlayComponent={NoRowDataComponent}
        {...props}
      />
    </Container>
  )
}

export default Table

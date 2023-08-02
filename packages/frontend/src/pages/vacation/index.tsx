import { styled } from 'styled-components'
import Layout from '@/layout'
import VacationDetails from '@/components/vacation'

const Container = styled.div`
  min-height: calc(100vh - 3.6rem - 60px);
  & > div {
    min-height: calc(100% - 40px);
  }
`

const Vacation = () => {
  return (
    <Layout>
      <Container>
        <h1 className='scroll-m-20 text-md font-semibold text-elephant-900 tracking-tight mb-[10px]'>
          Vacation
        </h1>
        <VacationDetails />
      </Container>
    </Layout>
  )
}

export default Vacation

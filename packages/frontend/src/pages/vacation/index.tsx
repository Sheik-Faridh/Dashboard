import { styled } from 'styled-components'
import Layout from '@/layout'

const Container = styled.div`
  height: calc(100vh - 3.6rem - 60px);
  & > div {
    min-height: calc(100% - 40px);
  }
`

const Vacation = () => {
  return (
    <Layout>
      <Container>
        <h1 className='scroll-m-20 text-md font-medium text-elephant-900 tracking-tight mb-[2px]'>
          Vacation
        </h1>
        <div className='w-full rounded shadow-lg bg-white p-3'>
          <div className='flex justify-center w-full gap-x-[10px]'>
            <div className='flex flex-col items-center justify-center w-52 p-3 text-white bg-jungle-400 rounded shadow-lg'>
              <span className='text-lg font-semibold'>24</span>
              <span className='text-sm'>No of Vacations</span>
            </div>
            <div className='flex flex-col items-center justify-center w-52 p-3 text-white bg-blue-400 rounded shadow-lg'>
              <span className='text-lg font-semibold'>0</span>
              <span className='text-sm'>No of Loss of Pay Token</span>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default Vacation

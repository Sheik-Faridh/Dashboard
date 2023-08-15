import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import Lottie from 'lottie-react'
import Layout from '@/layout'
import { Button } from '@/atoms/form'
import PageNotFoundAnimation from '@/assets/animation/page_not_found.json'

const Container = styled.div`
  height: calc(100vh - 3.6rem - 60px);
  position: relative;
  bottom: 55px;
`

const NotFoundPage = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  return (
    <Layout>
      <Container className='w-full flex flex-col justify-center items-center'>
        <Lottie
          className='w-[300px] h-[300px]'
          animationData={PageNotFoundAnimation}
          loop={false}
        />
        <Button color='secondary' className='!w-[100px]' onClick={handleClick}>
          Go Home
        </Button>
      </Container>
    </Layout>
  )
}

export default NotFoundPage

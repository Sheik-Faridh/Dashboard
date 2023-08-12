import Lottie from 'lottie-react'
import PageLoaderAnimation from '@/assets/animation/page_loader.json'

const PageLoader = () => {
  return (
    <div className='flex justify-center items-center w-full h-full'>
      <Lottie
        className='w-[300px] h-[300px]'
        animationData={PageLoaderAnimation}
        loop={true}
      />
    </div>
  )
}

export default PageLoader

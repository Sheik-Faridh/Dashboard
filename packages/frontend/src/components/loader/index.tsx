import Lottie from 'lottie-react'
import PageLoaderAnimation from '@/assets/animation/page_loader.json'

const PageLoader = () => {
  return (
    <div className='flex justify-center items-center w-full h-full'>
      <Lottie
        className='w-[250px] h-[250px] relative bottom-[40px]'
        animationData={PageLoaderAnimation}
        loop={true}
      />
    </div>
  )
}

export default PageLoader

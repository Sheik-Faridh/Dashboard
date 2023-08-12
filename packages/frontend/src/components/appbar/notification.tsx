import { BellIcon } from 'lucide-react'
import { Button } from '@/atoms/form'
import Skeleton from '@/atoms/skeleton'
import { useTypedSelector } from '@/redux/store'

const Notification = () => {
  const user = useTypedSelector((state) => state.user.user)

  if (!user) return <Skeleton className='w-[32px] h-[30px]' />

  return (
    <Button color='link' className='!w-[32px] rounded-full'>
      <BellIcon className='cursor-pointer text-elephant-800 w-[22px] h-[22px]' />
    </Button>
  )
}

export default Notification

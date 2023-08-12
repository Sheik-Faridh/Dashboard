import Notification from './notification'
import Search from './search'
import UserMenu from './usermenu'

const Appbar = () => {
  return (
    <div className='flex grow justify-end items-center p-[20px] bg-slate-50 gap-[20px]'>
      <Search />
      <Notification />
      <UserMenu />
    </div>
  )
}

export default Appbar

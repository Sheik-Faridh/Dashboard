import UserMenu from './usermenu'

const Appbar = () => {
  return (
    <div className='flex grow justify-end items-center p-[20px] bg-slate-50'>
      <UserMenu />
    </div>
  )
}

export default Appbar

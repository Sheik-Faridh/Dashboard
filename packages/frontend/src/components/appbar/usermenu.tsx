import { useNavigate } from 'react-router-dom'
import { SettingsIcon, UserIcon, LogOutIcon } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/atoms/avatar'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuPortal,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '@/atoms/dropdown_menu'
import Skeleton from '@/atoms/skeleton'
import { useAppDispatch, useTypedSelector } from '@/redux/store'
import { useLogoutUserMutation } from '@/redux/services/auth'
import { getFirstCharacterFromName, stringToHslColor } from '@/utils'
import { setUser } from '@/redux/slice/user'

const UserMenu = () => {
  const user = useTypedSelector((state) => state.user.user)
  const [logoutUser] = useLogoutUserMutation()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  if (!user) return <Skeleton className='w-[30px] h-[30px] !rounded-full' />

  const nameLetter = getFirstCharacterFromName(user?.name ?? '')

  const handleLogout = async () => {
    try {
      await logoutUser(undefined).unwrap()
    } catch (error) {
      console.error(error)
    } finally {
      dispatch(setUser(null))
      navigate('/login')
    }
  }

  return (
    <div className='user-menu'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar
            className='cursor-pointer shadow-2xl'
            style={{ background: stringToHslColor(nameLetter) }}
          >
            <AvatarFallback className='text-white text-xs font-bold'>
              {nameLetter}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuPortal forceMount>
          <DropdownMenuContent sideOffset={4} className='relative right-[20px]'>
            <DropdownMenuLabel className='bg-smoke-25'>
              <div className='flex flex-col space-y-1'>
                <p className='text-sm font-medium leading-none text-elepant-800'>
                  {user?.name}
                </p>
                <p className='text-xs leading-none text-elephant-900'>
                  {user?.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='gap-x-[10px]'>
              <UserIcon className='w-[14px]' />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem className='gap-x-[10px]'>
              <SettingsIcon className='w-[14px]' />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem className='gap-x-[10px]' onClick={handleLogout}>
              <LogOutIcon className='text-permission-800 w-[14px]' />
              <span className='text-permission-800'>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenuPortal>
      </DropdownMenu>
    </div>
  )
}

export default UserMenu

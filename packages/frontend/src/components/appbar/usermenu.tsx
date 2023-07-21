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
import { stringToHslColor } from '@/utils'

const UserMenu = () => {
  return (
    <div className='user-menu'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar
            className='cursor-pointer shadow-2xl'
            style={{ background: stringToHslColor('SF') }}
          >
            <AvatarFallback className='text-white text-xs font-bold'>
              SF
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuPortal forceMount>
          <DropdownMenuContent sideOffset={4} className='relative right-[20px]'>
            <DropdownMenuLabel className='bg-smoke-25'>
              <div className='flex flex-col space-y-1'>
                <p className='text-sm font-medium leading-none text-elepant-800'>
                  shadcn
                </p>
                <p className='text-xs leading-none text-elephant-900'>
                  m@example.com
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
            <DropdownMenuItem className='gap-x-[10px]'>
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

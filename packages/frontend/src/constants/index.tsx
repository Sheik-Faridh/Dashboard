import { LuLayoutDashboard } from 'react-icons/lu'
import { IoPersonOutline } from 'react-icons/io5'
import { BsCalendar2X } from 'react-icons/bs'
import { SiGoogleclassroom } from 'react-icons/si'

export const sidebarList = [
  {
    name: 'Dashboard',
    icon: <LuLayoutDashboard color='#fff' />,
    href: '/',
  },
  {
    name: 'Profile',
    icon: <IoPersonOutline color='#fff' />,
    href: '/profile/me',
  },
  {
    name: 'Vacation',
    icon: <BsCalendar2X color='#fff' />,
    href: '/vacation',
  },
  {
    name: 'Training',
    icon: <SiGoogleclassroom color='#fff' />,
    href: '/training',
  },
]

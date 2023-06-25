import { FiSettings } from 'react-icons/fi'
import { AiOutlineProject } from 'react-icons/ai'
import { LuLayoutDashboard } from 'react-icons/lu'
import { IoPersonOutline } from 'react-icons/io5'
import { BsCalendar2X } from 'react-icons/bs'
import { SiGoogleclassroom } from 'react-icons/si'

type SideBarListType = {
  name: string
  icon: JSX.Element
  href: string
}

export const sidebarList: SideBarListType[] = [
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
    name: 'Projects',
    icon: <AiOutlineProject color='#fff' />,
    href: '/projects',
  },
  {
    name: 'Training',
    icon: <SiGoogleclassroom color='#fff' />,
    href: '/training',
  },
  {
    name: 'Settings',
    icon: <FiSettings color='#fff' />,
    href: '/settings',
  },
]

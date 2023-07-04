import {
  LayoutDashboardIcon,
  UserIcon,
  CalendarIcon,
  GanttChartIcon,
  PresentationIcon,
  SettingsIcon,
} from 'lucide-react'

type SideBarListType = {
  name: string
  icon: JSX.Element
  href: string
}

export const sidebarList: SideBarListType[] = [
  {
    name: 'Dashboard',
    icon: <LayoutDashboardIcon color='#fff' />,
    href: '/',
  },
  {
    name: 'Profile',
    icon: <UserIcon color='#fff' />,
    href: '/profile/me',
  },
  {
    name: 'Vacation',
    icon: <CalendarIcon color='#fff' />,
    href: '/vacation',
  },
  {
    name: 'Projects',
    icon: <GanttChartIcon color='#fff' />,
    href: '/projects',
  },
  {
    name: 'Training',
    icon: <PresentationIcon color='#fff' />,
    href: '/training',
  },
  {
    name: 'Settings',
    icon: <SettingsIcon color='#fff' />,
    href: '/settings',
  },
]

export const userMenuList = [
  {
    value: 'settings',
    text: 'Settings',
    graphicsProps: { name: 'settings' },
  },
  {
    value: 'logout',
    text: 'Logout',
    graphicsProps: { name: 'reply' },
  },
]

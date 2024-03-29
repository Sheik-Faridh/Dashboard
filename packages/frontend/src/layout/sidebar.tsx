import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Skeleton from '@/atoms/skeleton'
import Tooltip from '@/atoms/tooltip'
import { sidebarList } from '@/constants'
import { useTypedSelector } from '@/redux/store'

const Aside = styled.aside`
  position: fixed;
  top: 3.6rem;
  left: 0;
  bottom: 0;
  width: 3.6rem;
  z-index: 10;
  background: var(--sidebar-bg);
  & > nav {
    padding: 20px 0;
    & > ul {
      margin: 0;
      padding: 0;
      & > li {
        display: flex;
        position: relative;
        right: 2px;
        height: 3rem;
        justify-content: center;
        align-items: center;
        & a {
          display: block;
          padding: 4px;
          border-radius: 5px;
          cursor: pointer;
          &:hover {
            background-color: rgba(255, 255, 255, 0.15);
          }
          & svg {
            display: block;
            margin: auto;
            width: 1.4rem;
            height: 1.4rem;
          }
        }
      }
    }
  }
`

const Sidebar = () => {
  const user = useTypedSelector((state) => state.user.user)
  return (
    <Aside>
      <nav>
        <ul>
          {sidebarList.map((list) => (
            <li key={list.name}>
              {!user ? (
                <Skeleton className='w-[1.5rem] h-[1.5rem] !bg-cyan-900' />
              ) : (
                <Link to={list.href}>
                  <Tooltip content={list.name} placement='right'>
                    {list.icon}
                  </Tooltip>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </Aside>
  )
}

export default Sidebar

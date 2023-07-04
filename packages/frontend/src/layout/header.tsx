import styled from 'styled-components'
import LogoImage from '@/assets/images/logo.webp'
import Appbar from '@/components/appbar'

const Header = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3.6rem;
  z-index: 20;
`

const AppHeader = () => {
  return (
    <Header className='bg-slate-50'>
      <div className='inline-block w-[3.6rem] h-full'>
        <img
          src={LogoImage}
          alt='Logo'
          className='w-full h-full object-covers'
        />
      </div>
      <Appbar />
    </Header>
  )
}

export default AppHeader

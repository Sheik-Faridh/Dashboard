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
  & > .logo-wrapper {
    display: inline-block;
    width: 3.6rem;
    height: 100%;
    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`

const AppHeader = () => {
  return (
    <Header className='fw-bg-smoke-25'>
      <div className='logo-wrapper'>
        <img src={LogoImage} alt='Logo' />
      </div>
      <Appbar />
    </Header>
  )
}

export default AppHeader

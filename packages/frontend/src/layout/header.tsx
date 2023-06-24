import styled from 'styled-components'
import LogoImage from '@/assets/images/logo.webp'

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3.6rem;
  z-index: 20;
  & > .logo-wrapper {
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
    <Header>
      <div className='logo-wrapper'>
        <img src={LogoImage} alt='Logo' />
      </div>
    </Header>
  )
}

export default AppHeader

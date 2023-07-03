import { styled } from 'styled-components'
import UserMenu from './usermenu'

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
`

const Appbar = () => {
  return (
    <Container>
      <UserMenu />
    </Container>
  )
}

export default Appbar

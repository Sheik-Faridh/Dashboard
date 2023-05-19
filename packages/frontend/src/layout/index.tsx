import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const Main = styled.main`
  max-width: 100vw;
  min-height: 100vh;
`;

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return <Main>{children}</Main>;
};

export default Layout;

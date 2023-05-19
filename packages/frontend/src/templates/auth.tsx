import styled from 'styled-components';
import LogoImage from '@/assets/images/logo.webp';
import { PropsWithChildren } from 'react';

type AuthTemplateProps = {
  image: string;
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  & > .outer-wrapper {
    width: 100%;
    height: 100%;
    & > .inner-wrapper {
      width: 80%;
      height: 90%;
      max-width: 1900px;
      & > .form-wrapper {
        flex-basis: 0;
        & > .header-logo-wrapper {
          width: 100%;
          & > .logo-wrapper {
            width: 100px;
            height: 80px;
            & > img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
          & > .logo-name {
            text-transform: uppercase;
            background: linear-gradient(
              to right,
              #f89c20,
              #e55642,
              #b9414c,
              #813d78,
              #483776
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
        }
      }
      & > .image-wrapper {
        flex-basis: 0;
        border-radius: 50px;
        padding: 0;
        & img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50px;
        }
      }
    }
  }
`;

const AuthTemplate = ({
  children,
  image,
}: PropsWithChildren<AuthTemplateProps>) => {
  return (
    <Container>
      <div className="fw-bg-smoke-50 fw-flex fw-justify-center fw-items-center outer-wrapper">
        <div className="fw-card-3 fw-p-20 fw-flex fw-gap-5 inner-wrapper">
          <div className="form-wrapper fw-flex-grow">
            <div className="header-logo-wrapper fw-flex fw-items-center">
              <div className="logo-wrapper">
                <img src={LogoImage} alt="Logo" />
              </div>
              <span className="logo-name fw-type-h2">Space Desk</span>
            </div>
            {children}
          </div>
          <div className="image-wrapper fw-flex-grow fw-card-2">
            <img src={image} alt="Image" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AuthTemplate;

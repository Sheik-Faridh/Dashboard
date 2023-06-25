import { PropsWithChildren } from 'react'
import styled from 'styled-components'
import LogoImage from '@/assets/images/logo.webp'

type AuthTemplateProps = {
  image: string
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  & > .outer-wrapper {
    width: 100%;
    height: 100%;
    & > .fw-card-3 {
      width: 40%;
      margin: 20px;
      & > .form-outer-wrapper {
        width: 100%;
        & > .header-logo-wrapper {
          width: 100%;
          & > .logo-wrapper {
            width: 70px;
            height: 50px;
            & > img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
          & > .logo-name {
            font-size: 1.4rem;
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
    }
    & > .image-container {
      width: 60%;
      height: 100%;
      & > .image-wrapper {
        padding: 0;
        width: calc(100% - 20px);
        height: calc(100% - 40px);
        & img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    & > .outer-wrapper {
      & > .fw-card-3 {
        width: 50%;
      }
      & > .image-container {
        width: 50%;
      }
    }
  }
`

const AuthTemplate = ({
  children,
  image,
}: PropsWithChildren<AuthTemplateProps>) => {
  return (
    <Container>
      <div className='fw-bg-smoke-50 fw-flex fw-justify-center fw-items-center outer-wrapper'>
        <div className='fw-card-3 fw-p-20 fw-flex fw-gap-5'>
          <div className='form-outer-wrapper'>
            <div className='header-logo-wrapper fw-flex fw-items-center'>
              <div className='logo-wrapper'>
                <img src={LogoImage} alt='Logo' />
              </div>
              <span className='logo-name fw-type-h2'>Space Desk</span>
            </div>
            {children}
          </div>
        </div>
        <div className='image-container fw-flex fw-items-center'>
          <div className='image-wrapper fw-card-2'>
            <img src={image} alt='Image' />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default AuthTemplate

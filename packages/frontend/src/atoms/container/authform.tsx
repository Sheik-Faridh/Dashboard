import styled from 'styled-components'

const AuthFormContainer = styled.div`
  width: 100%;
  margin: 20px 0;
  & > .form-wrapper {
    width: 100%;
    & > label {
      display: block;
      text-align: center;
    }
    & > .oauth-button-wrapper {
      margin: 20px 0 10px;
      & > button > svg {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
    }
    & > form {
      & .text-field-control:not(.no-margin) {
        margin-bottom: 15px;
      }
      & > .line-wrapper {
        margin: 6px 0;
      }
      & > .btn-wrapper {
        margin: 30px 0 10px;
      }
    }
  }
`

export default AuthFormContainer

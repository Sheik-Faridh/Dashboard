import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FwInput, FwButton, FwCheckbox } from '@freshworks/crayons/react';
import { ReactComponent as GoogleIcon } from '@/assets/svg/google-icon.svg';
import Divider from '@/components/divider';

const FormContainer = styled.div`
  width: 100%;
  margin: 20px 0;
  & > .form-wrapper {
    width: 80%;
    & > label {
      display: block;
      text-align: center;
    }
    & > .oauth-button-wrapper {
      margin: 20px 0 10px;
      & > fw-button {
        width: 100%;
        & > svg {
          width: 20px;
          height: 20px;
          margin-right: 10px;
        }
      }
    }
    & > form {
      & > fw-input:not(#password) {
        margin-bottom: 15px;
      }
      & > .line-wrapper {
        margin: 6px 0;
      }
      & > .btn-wrapper {
        margin: 30px 0 10px;
        & fw-button {
          width: 100%;
        }
      }
    }
  }
`;

const Form = () => {
  return (
    <FormContainer className="fw-flex fw-justify-center">
      <div className="form-wrapper fw-card-3 fw-p-20">
        <label className="fw-type-h4 fw-color-smoke-700">
          Log in to your account
        </label>
        <div className="oauth-button-wrapper fw-flex">
          <FwButton color="secondary">
            <GoogleIcon />
            Sign in with Google
          </FwButton>
        </div>
        <Divider>or</Divider>
        <form>
          <FwInput
            id="email"
            type="email"
            label="Email"
            iconLeft="email"
            placeholder="Enter your email"
            hint-text="Enter your email address associated with the account"
            required
            clearInput
          />
          <FwInput
            id="password"
            type="password"
            label="Password"
            iconLeft="password"
            placeholder="Enter your password"
            hint-text="Enter your account password"
            required
            clearInput
          />
          <div className="line-wrapper fw-flex fw-justify-between">
            <FwCheckbox>
              <span>Remember Me</span>
            </FwCheckbox>
            <Link className="fw-type-h7 fw-color-azure-800" to="">
              Forgot Password?
            </Link>
          </div>
          <div className="btn-wrapper fw-flex">
            <FwButton color="primary" type="submit">
              Submit
            </FwButton>
          </div>
          <div className="fw-flex">
            <span className="fw-type-h7 fw-color-elephant-800">
              Don't have an account?
              <Link
                className="fw-type-h7 fw-color-azure-800 fw-pl-4"
                to="/signup"
              >
                Create One
              </Link>
            </span>
          </div>
        </form>
      </div>
    </FormContainer>
  );
};

export default Form;

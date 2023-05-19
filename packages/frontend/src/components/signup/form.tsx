import { Link } from 'react-router-dom';
import { FwInput, FwButton } from '@freshworks/crayons/react';
import { ReactComponent as GoogleIcon } from '@/assets/svg/google-icon.svg';
import { AuthFormContainer } from '@/components/container';
import Divider from '@/components/divider';

const Form = () => {
  return (
    <AuthFormContainer className="fw-flex fw-justify-center">
      <div className="form-wrapper fw-card-3 fw-p-20">
        <label className="fw-type-h4 fw-color-smoke-700">
          Create your account
        </label>
        <div className="oauth-button-wrapper fw-flex">
          <FwButton color="secondary">
            <GoogleIcon />
            Sign up with Google
          </FwButton>
        </div>
        <Divider>or</Divider>
        <form>
          <FwInput
            id="name"
            type="name"
            label="User Name"
            placeholder="Enter your name"
            required
            clearInput
          />
          <FwInput
            id="email"
            type="email"
            label="Email"
            iconLeft="email"
            placeholder="Enter your email"
            required
            clearInput
          />
          <FwInput
            id="password"
            type="password"
            label="Password"
            iconLeft="password"
            placeholder="Enter password"
            required
            clearInput
          />
          <FwInput
            id="confirm-password"
            type="password"
            label="Confirm Password"
            iconLeft="password"
            placeholder="Enter password"
            required
            clearInput
          />
          <div className="btn-wrapper fw-flex">
            <FwButton color="primary" type="submit">
              Submit
            </FwButton>
          </div>
          <div className="fw-flex">
            <span className="fw-type-h7 fw-color-elephant-800">
              Already have an account?
              <Link
                className="fw-type-h7 fw-color-azure-800 fw-pl-4"
                to="/login"
              >
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </AuthFormContainer>
  );
};

export default Form;

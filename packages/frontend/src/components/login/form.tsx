import { Link } from 'react-router-dom';
import { FwInput, FwButton, FwCheckbox } from '@freshworks/crayons/react';
import { ReactComponent as GoogleIcon } from '@/assets/svg/google-icon.svg';
import { AuthFormContainer } from '@/components/container';
import Divider from '@/components/divider';
import { useLoginForm } from '@/hooks/login';
import { getFormInputError, getFormInputState } from '@/utils/form';

const Form = () => {
  const { errors } = useLoginForm({
    selectors: {
      emailSelector: '#email',
      passwordSelector: '#password',
      submitBtnSelector: '#login-submit-btn',
      rememberMeSelector: '#remember-me-checkbox',
    },
  });
  return (
    <AuthFormContainer className="fw-flex fw-justify-center">
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
            hintText="Enter your email address associated with the account"
            state={getFormInputState(errors?.email)}
            errorText={getFormInputError(errors?.email)}
            required
            clearInput
          />
          <FwInput
            id="password"
            type="password"
            label="Password"
            iconLeft="password"
            placeholder="Enter your password"
            className="no-margin"
            hintText="Enter your account password"
            state={getFormInputState(errors?.password)}
            errorText={getFormInputError(errors?.password)}
            required
            clearInput
          />
          <div className="line-wrapper fw-flex fw-justify-between">
            <FwCheckbox id="remember-me-checkbox">
              <span>Remember Me</span>
            </FwCheckbox>
            <Link className="fw-type-h7 fw-color-azure-800" to="">
              Forgot Password?
            </Link>
          </div>
          <div className="btn-wrapper fw-flex">
            <FwButton id="login-submit-btn" color="primary">
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
    </AuthFormContainer>
  );
};

export default Form;

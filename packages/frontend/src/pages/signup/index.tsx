import AuthTemplate from '@/templates/auth';
import SignupImage from '@/assets/images/signup.webp';
import { SignupForm } from '@/components/signup';

const SignupPage = () => {
  return (
    <AuthTemplate image={SignupImage}>
      <SignupForm />
    </AuthTemplate>
  );
};

export default SignupPage;

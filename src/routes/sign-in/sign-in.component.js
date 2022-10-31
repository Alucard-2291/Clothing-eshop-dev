import SignupForm from '../../components/sign-up-form/sign-up-form';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>I am sing in </h1>
      <button onClick={logGoogleUser}>Sign in with google</button>
      <SignupForm />
    </div>
  );
};

export default SignIn;

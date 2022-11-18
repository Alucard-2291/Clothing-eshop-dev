import SignInForm from "../../components/sign-in-form/sign-in-form";
import SignupForm from "../../components/sign-up-form/sign-up-form";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignupForm />
    </div>
  );
};

export default Authentication;

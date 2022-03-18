import { useState, useContext, useEffect } from "react";
import { SignInPage } from "./SignInPage";
import SignUpPage from "./SignUpPage";
import { AuthContext } from "../Authentication";
import { useHistory } from "react-router-dom";
import classNames from "classnames";

const SignPage = () => {
  const [step, setStep] = useState(0);
  const { isLogged } = useContext(AuthContext);
  let history = useHistory();

  useEffect(() => {
    if (isLogged) {
      history.push("/");
    }
  }, [isLogged, history]);
  return (
    <div
      className={classNames("mx-auto items-center min-h-full", {
        hidden: isLogged,
      })}
    >
      {(() => {
        switch (step) {
          case 0:
            return <SignInPage setStep={setStep} />;
          case 1:
            return <SignUpPage setStep={setStep} />;
          default:
            return <SignInPage setStep={setStep} />;
        }
      })()}
    </div>
  );
};

export default SignPage;

import { useState } from "react";
import { SignInPage } from "./SignInPage";
import SignUpPage from "./SignUpPage";
const SignPage = () => {
  const [step, setStep] = useState(0);

  return (
    <div className="mx-auto items-center min-h-full">
      {step === 0 ? (
        <SignInPage setStep={setStep} />
      ) : (
        <SignUpPage setStep={setStep} />
      )}
    </div>
  );
};

export default SignPage;

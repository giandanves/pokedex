import { Formik, Form, Field } from "formik";
import { useContext } from "react";
import Button from "../components/Button";
import { AuthContext } from "../Authentication";

const SignUpPage = ({ setStep }) => {
  const { createAccount, signUpErrorMessages } = useContext(AuthContext);
  return (
    <div className="py-6">
      <h2 className="text-base font-bold text-center">Sign Up</h2>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.dir(values);
          createAccount(values.name, values.email, values.password);
        }}
      >
        <Form>
          <Field name="name">
            {({ field, form, meta }) => (
              <input
                type="text"
                className="text-body-02 w-full h-12 px-2 border border-gray rounded-lg my-2"
                placeholder={"Name"}
                {...field}
              />
            )}
          </Field>
          {signUpErrorMessages.name && (
            <p className="text-danger text-xs my-2">
              {signUpErrorMessages.name}
            </p>
          )}
          <Field name="email">
            {({ field, form, meta }) => (
              <input
                type="text"
                className="text-body-02 w-full h-12 px-2 border border-gray rounded-lg my-2"
                placeholder={"Email"}
                {...field}
              />
            )}
          </Field>
          {signUpErrorMessages.email && (
            <p className="text-danger text-xs my-2">
              {signUpErrorMessages.email}
            </p>
          )}
          <Field name="password">
            {({ field, form, meta }) => (
              <input
                type="text"
                className="text-body-02 w-full h-12 px-2 my-6 border border-gray rounded-lg"
                placeholder={"Password"}
                {...field}
              />
            )}
          </Field>
          {signUpErrorMessages.password && (
            <p className="text-danger text-xs my-2">
              {signUpErrorMessages.password}
            </p>
          )}
          <div className="w-full flex flex-col space-y-2">
            <Button
              textColor={"white"}
              bg={"primary"}
              type={"submit"}
              addClass={"h-11"}
            >
              Sign up
            </Button>
            <Button
              textColor={"primary"}
              bg={"white"}
              addClass={"h-11"}
              onClick={() => setStep(0)}
            >
              Sign in
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUpPage;

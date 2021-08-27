import { Formik, Form, Field } from "formik";
import { useContext } from "react";
import Button from "../components/Button";
import { AuthContext } from "../Authentication";

export const SignInPage = ({ setStep }) => {
  const { signIn, signInErrorMessage } = useContext(AuthContext);
  return (
    <div className="py-6">
      <h2 className="text-base font-bold text-center">Sign in</h2>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.dir(values);
          signIn(values.email, values.password);
        }}
      >
        <Form>
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
          <Field name="password">
            {({ field, form, meta }) => (
              <input
                type="text"
                className="text-body-02 w-full h-12 px-2 mt-6 border border-gray rounded-lg"
                placeholder={"Password"}
                {...field}
              />
            )}
          </Field>
          {signInErrorMessage && (
            <p className="text-danger text-xs my-2">{signInErrorMessage}</p>
          )}
          <div className="w-full flex flex-col space-y-2">
            <Button
              textColor={"white"}
              bg={"primary"}
              type={"submit"}
              addClass={"h-11"}
            >
              Sign in
            </Button>
            <Button
              textColor={"primary"}
              bg={"white"}
              addClass={"h-11"}
              onClick={() => setStep(1)}
            >
              Sign up
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

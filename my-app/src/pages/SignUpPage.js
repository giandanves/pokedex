import { Formik, Form, Field } from "formik";
import { useContext } from "react";
import Button from "../components/Button";
import { AuthContext } from "../Authentication";

const SignUpPage = ({ setStep }) => {
  const { signUp } = useContext(AuthContext);
  return (
    <div className="py-6">
      <h2 className="text-base font-bold text-center">Sign Up</h2>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={async (values, actions) => {
          const resp = await signUp(values);

          if (resp !== "success") {
            actions.setErrors(resp);
          }
        }}
      >
        {({ errors }) => (
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
            {errors.name && (
              <p className="text-danger text-xs my-2">{errors.name}</p>
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
            {errors.email && (
              <p className="text-danger text-xs my-2">{errors.email}</p>
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
            {errors.password && (
              <p className="text-danger text-xs my-2">{errors.password}</p>
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
        )}
      </Formik>
    </div>
  );
};

export default SignUpPage;

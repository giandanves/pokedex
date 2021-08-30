import { Formik, Form, Field } from "formik";
import Button from "../components/Button";
import { useMutation } from "react-query";
import { signIn } from "../authSystem";
import { AuthContext } from "../Authentication";
import { useContext } from "react";

export const SignInPage = ({ setStep }) => {
  const { setLogged } = useContext(AuthContext);
  const { mutateAsync } = useMutation(signIn);

  return (
    <div className="py-6">
      <h2 className="text-base font-bold text-center">Sign in</h2>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={async (values, actions) => {
          const resp = await mutateAsync(values);
          if (resp?.success) {
            setLogged(true);
          }
          if (resp?.error) {
            actions.setStatus(resp.error);
          }
        }}
      >
        {({ status }) => (
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

            {status && <p className="text-danger text-xs my-2">{status}</p>}
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
        )}
      </Formik>
    </div>
  );
};

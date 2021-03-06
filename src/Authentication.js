import { createContext } from "react";
import getUser from "./authSystem";
import { useQueryClient, useMutation, useQuery } from "react-query";
import { signIn, createAccount, signOut } from "./authSystem";
export const AuthContext = createContext();

const AuthProvider = (props) => {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: "user",
    queryFn: getUser,
  });

  let user = data?.user;
  let isLogged = user;

  const { mutateAsync: userSignIn } = useMutation(signIn, {
    onSuccess: () => {
      queryClient.invalidateQueries("user");
    },
  });

  const { mutateAsync: signUp } = useMutation(createAccount, {
    onSuccess: async () => {
      queryClient.invalidateQueries("user");
    },
  });

  const { mutateAsync: userSignOut } = useMutation(signOut, {
    onSuccess: async () => {
      queryClient.invalidateQueries("user");
      queryClient.resetQueries("user");
    },
  });

  return (
    <AuthContext.Provider
      value={{
        userSignIn,
        isLogged,
        user,
        signUp,
        userSignOut,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

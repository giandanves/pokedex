import { createContext } from "react";
import getUser from "./authSystem";
import { useQueryClient, useMutation, useQuery } from "react-query";
import { signIn, createAccount, signOut } from "./authSystem";
export const AuthContext = createContext();

const AuthProvider = (props) => {
  const queryClient = useQueryClient();

  const { data, refetch } = useQuery({
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
    onSuccess: async (data) => {
      if (data === "success") {
        queryClient.invalidateQueries("user");
      }
    },
  });

  const { mutateAsync: userSignOut } = useMutation(signOut, {
    onSuccess: async (data) => {
      if (data === "success") {
        queryClient.invalidateQueries("user");
        refetch();
      }
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

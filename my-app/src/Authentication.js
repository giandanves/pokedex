import { createContext, useState, useEffect } from "react";
import {
  signIn,
  signOut,
  createAccount,
  getUser,
} from "./authenticationFunctions.js";
export const AuthContext = createContext();

const AuthProvider = (props) => {
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    getUser().then((r) => {
      console.dir(r);
      if (r.message === "Invalid Authorization") {
        setLogged(false);
      } else if (r.user.name && r.user.name !== user?.username) {
        setLogged(true);
        setUser({ username: r.user.name, email: r.user.email });
      }
    });
  }, [user]);

  return (
    <AuthContext.Provider value={{ logged, setLogged, setUser, user }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
//   .then((response) => response.text())
// .then((result) => result)
//.catch((error) => console.log("error", error));

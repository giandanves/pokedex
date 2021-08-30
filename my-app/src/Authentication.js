import { createContext, useState, useEffect } from "react";
import getUser from "./authSystem";
import { useQuery } from "react-query";
export const AuthContext = createContext();

const AuthProvider = (props) => {
  const [logged, setLogged] = useState(false);
  const [signUpErrorMessages, setSignUpErrorMessages] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { data } = useQuery({
    queryKey: logged,
    queryFn: getUser,
  });

  useEffect(() => {
    if (data?.user) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, [data]);

  const createAccount = (name, email, password) => {
    setSignUpErrorMessages({
      email: "",
      name: "",
      password: "",
    });

    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    let data = JSON.stringify({
      email: email,
      password: password,
      name: name,
    });

    let requestOptions = {
      method: "POST",
      headers: headers,
      body: data,
      redirect: "follow",
    };
    fetch("http://pokedex.jhonnymichel.com/signup", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        let rst = JSON.parse(result);
        if (rst.message === "User created") {
          //signIn(email, password);
        } else if (rst.message === "Could not sign you up") {
          if (rst.data.issues.message === "Email already in use") {
            setSignUpErrorMessages((prevState) => ({
              ...prevState,
              email: rst.data.issues.message,
            }));
          } else {
            rst.data.issues.forEach((issue) => {
              console.log(issue.path[0]);
              console.log(issue.message);
              setSignUpErrorMessages((prevState) => ({
                ...prevState,
                [issue.path[0]]: issue.message,
              }));
            });
          }
        }
      })
      .catch((error) => console.log("error", error));
  };

  const signOut = () => {
    let headers = new Headers();
    let token = localStorage.getItem("token");
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${token}`);

    let requestOptions = {
      method: "POST",
      headers: headers,
      redirect: "follow",
    };

    fetch("http://pokedex.jhonnymichel.com/signout", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        let parsed = JSON.parse(result);
        if (parsed.message === "User signed out") {
          localStorage.removeItem("token");
          setLogged(false);
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <AuthContext.Provider
      value={{
        logged,
        setLogged,
        createAccount,
        signOut,
        signUpErrorMessages,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

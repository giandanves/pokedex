import { createContext, useState, useEffect } from "react";
export const AuthContext = createContext();

const AuthProvider = (props) => {
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState();
  const [signInErrorMessage, setSignInErrorMessage] = useState();
  const [signUpErrorMessages, setSignUpErrorMessages] = useState({
    name: "",
    email: "",
    password: "",
  });

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
          signIn(email, password);
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

  const getUser = () => {
    let headers = new Headers();
    let token = localStorage.getItem("token");
    headers.append("Authorization", `Bearer ${token}`);

    let requestOptions = {
      method: "GET",
      headers: headers,
      redirect: "follow",
    };

    fetch("http://pokedex.jhonnymichel.com/profile", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        let r = JSON.parse(result);
        console.dir(r);
        if (r.user) {
          setUser({ name: r.user.name, email: r.user.email });
          setLogged(true);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const signIn = (email, password) => {
    setSignInErrorMessage();
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    let data = JSON.stringify({
      email: email,
      password: password,
    });

    let requestOptions = {
      method: "POST",
      headers: headers,
      body: data,
      redirect: "follow",
    };

    fetch("http://pokedex.jhonnymichel.com/signin", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        let parsed = JSON.parse(result);
        if (parsed.message === "User signed in") {
          localStorage.setItem("token", parsed.token);
          getUser();
        }
        if (parsed.message === "Invalid Credentials") {
          setSignInErrorMessage("Incorrect email address or password");
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
          setUser();
          setLogged(false);
        }
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        logged,
        user,
        signIn,
        createAccount,
        signOut,
        signInErrorMessage,
        signUpErrorMessages,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

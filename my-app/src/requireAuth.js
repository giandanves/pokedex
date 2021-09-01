import SignPage from "./pages/SignPage";
import { useContext } from "react";
import { AuthContext } from "./Authentication";
import getUser from "./authSystem";

const requireAuth = (component) => {
  console.log("Tá entrando");
  let r = getUser();
  if (r.then((result) => result.user)) {
    console.log("Coisou");
    return component;
  } else {
    return SignPage;
  }
};

export default requireAuth;

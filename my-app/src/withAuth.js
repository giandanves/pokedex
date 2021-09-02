import SignPage from "./pages/SignPage";
import { AuthContext } from "./Authentication";
import { useContext } from "react";

const WithAuth = ({ children }) => {
  const { isLogged } = useContext(AuthContext);

  return <>{isLogged ? children : <SignPage />}</>;
};

export default WithAuth;

import { AuthContext } from "./Authentication";
import { useContext } from "react";
import SignPage from "./pages/SignPage";

const requireAuth = (Component) => {
  return () => {
    const { isLogged } = useContext(AuthContext);

    if (isLogged) {
      return <Component />;
    }

    return <SignPage />;
  };
};

export default requireAuth;

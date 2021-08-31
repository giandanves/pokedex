import { AuthContext } from "../Authentication";
import { useContext } from "react";
import NotLoggedError from "../NotLoggedError";

export const TeamsPage = () => {
  const { isLogged } = useContext(AuthContext);

  return (
    <>
      {isLogged ? (
        <div>
          <p className="h-20 text-center">TEAMS</p>
        </div>
      ) : (
        <NotLoggedError />
      )}
    </>
  );
};

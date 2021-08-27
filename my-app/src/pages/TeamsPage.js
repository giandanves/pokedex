import { AuthContext } from "../Authentication";
import { useContext } from "react";
import NotLoggedError from "../NotLoggedError";

export const TeamsPage = () => {
  const { logged } = useContext(AuthContext);

  return (
    <>
      {logged ? (
        <div>
          <p className="h-20 text-center">TEAMS</p>
        </div>
      ) : (
        <NotLoggedError />
      )}
    </>
  );
};

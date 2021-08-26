import pokedex from "../img/pokedex.svg";
import favorites from "../img/favpage.svg";
import teams from "../img/teams.svg";
import signin from "../img/signin.svg";
import { Link } from "react-router-dom";
import { NavbarIcon } from "./NavbarIcon";
import { AuthContext } from "../Authentication";
import { useContext } from "react";
import { signOut } from "../authenticationFunctions";

export const Navbar = () => {
  const { logged, user, setUser } = useContext(AuthContext);
  return (
    <div className="hidden sm:flex border-b  border-lightgrey h-16 w-full pb-6 px-6">
      <div className="flex justify-between w-full max-w-fullscreen mx-auto">
        <div className="flex">
          <Link to="/">
            <NavbarIcon img={pokedex} title="Pokedex" path={"/"} />
          </Link>
          <Link to="/teams">
            <NavbarIcon img={teams} title="Teams" path={"/teams"} />
          </Link>
          <Link to="/favorites">
            <NavbarIcon img={favorites} title="Favorites" path={"/favorites"} />
          </Link>
        </div>
        {logged ? (
          <div>
            <NavbarIcon img={signin} title={user?.username} path={"/signin"} />
            <p
              className="text-xs text-danger text-right"
              onClick={() => {
                signOut();
                setUser("logging out");
              }}
            >
              Logout
            </p>
          </div>
        ) : (
          <Link to="/signin">
            <NavbarIcon img={signin} title="Sign in" path={"/signin"} />
          </Link>
        )}
      </div>
    </div>
  );
};

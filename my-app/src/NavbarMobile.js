import pokedex from "./img/pokedex.svg";
import { Link } from "react-router-dom";
import favorites from "./img/favpage.svg";
import teams from "./img/teams.svg";
import signin from "./img/signin.svg";
import { MobileIcon } from "./NavbarIcon";

export const NavbarMobile = () => {
  return (
    <div className="fixed bottom-0 sm:hidden shadow-shadow flex w-full h-14 justify-between bg-white px-10 rounded-t-2xl">
      <Link to="/">
        <MobileIcon img={pokedex} title="Pokedex" path={"/"} />
      </Link>
      <Link to="/teams">
        <MobileIcon img={teams} title="Teams" path={"/teams"} />
      </Link>
      <Link to="/favorites">
        <MobileIcon img={favorites} title="Favorites" path={"/favorites"} />
      </Link>

      <Link to="/signin">
        <MobileIcon img={signin} title="Sign in" path={"/signin"} />
      </Link>
    </div>
  );
};

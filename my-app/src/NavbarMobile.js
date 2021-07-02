import pokedex from "./img/pokedex.svg";
import favpage from "./img/favpage.svg";
import teams from "./img/teams.svg";
import signin from "./img/signin.svg";
import { useContext, useState } from "react";
import { FilterContext } from "./FilterContext";

export const NavbarMobile = () => {
  const {
    teamsIsOpen,
    setTeamsIsOpen,
    favoritesIsOpen,
    setFavoritesIsOpen,
    signInIsOpen,
    setSignInIsOpen,
  } = useContext(FilterContext);

  const [isOnPokedex, setIsOnPokedex] = useState(true);

  const goToPokedex = () => {
    setIsOnPokedex(true);
    setTeamsIsOpen(false);
    setFavoritesIsOpen(false);
    setSignInIsOpen(false);
  };

  const goToTeams = () => {
    setTeamsIsOpen(true);
    setFavoritesIsOpen(false);
    setIsOnPokedex(false);
    setSignInIsOpen(false);
  };

  const goToFavorites = () => {
    setFavoritesIsOpen(true);
    setTeamsIsOpen(false);
    setIsOnPokedex(false);
    setSignInIsOpen(false);
  };

  const goToSignIn = () => {
    setSignInIsOpen(true);
    setTeamsIsOpen(false);
    setIsOnPokedex(false);
    setFavoritesIsOpen(false);
  };

  return (
    <div className="fixed bottom-0 sm:hidden shadow-shadow flex w-full h-14 justify-between bg-white px-10 rounded-t-2xl">
      <button
        className="flex flex-col h-full items-center justify-between"
        onClick={() => goToPokedex()}
      >
        <div className="h-full flex flex-col justify-center">
          <img
            src={pokedex}
            alt="pokedexIcon"
            className={`${isOnPokedex && "filter-primary"}`}
          />
        </div>
        <div
          className={`h-1 w-10 bg-${
            isOnPokedex ? "primary" : "white"
          } rounded-lg`}
        ></div>
      </button>
      <button
        className="flex flex-col h-full items-center justify-between"
        onClick={() => goToTeams()}
      >
        <div className="h-full flex flex-col justify-center">
          <img
            src={teams}
            alt="pokedexIcon"
            className={`w-5 ${teamsIsOpen && "filter-primary"}`}
          />
        </div>
        <div
          className={`h-1 w-10 bg-${
            teamsIsOpen ? "primary" : "white"
          } rounded-lg`}
        ></div>
      </button>
      <button
        className="flex flex-col h-full items-center justify-between"
        onClick={() => goToFavorites()}
      >
        <div className="h-full flex flex-col justify-center">
          <img
            src={favpage}
            alt="favorites"
            className={`${favoritesIsOpen && "filter-primary"}`}
          />
        </div>
        <div
          className={`h-1 w-10 bg-${
            favoritesIsOpen ? "primary" : "white"
          } rounded-lg`}
        ></div>
      </button>
      <button
        className="flex flex-col h-full items-center justify-between"
        onClick={() => goToSignIn()}
      >
        <div className="h-full flex flex-col justify-center">
          <img
            src={signin}
            alt="sign in"
            className={`${signInIsOpen && "filter-primary"}`}
          />
        </div>
        <div
          className={`h-1 w-10 bg-${
            signInIsOpen ? "primary" : "white"
          } rounded-lg`}
        ></div>
      </button>
    </div>
  );
};

import pokedex from "./img/pokedex.svg";
import favpage from "./img/favpage.svg";
import teams from "./img/teams.svg";
import signin from "./img/signin.svg";
import { useContext, useState } from "react";
import { FilterContext } from "./FilterContext";

export const Navbar = () => {
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
    <div className="hidden sm:flex justify-between border-b border-lightgrey h-16 w-full max-w-fullscreen pt-5 pb-6 px-6">
      <div className="flex">
        <button
          className="flex h-12 pr-3 items-start"
          onClick={() => goToPokedex()}
        >
          <img
            src={pokedex}
            alt="pokedexIcon"
            className={`mr-2 ${isOnPokedex && "filter-primary"}`}
          />
          <div>
            <h2
              className={`text-base text-${
                isOnPokedex ? "primary" : "black"
              } font-bold`}
            >
              Pokedex
            </h2>
            <div
              className={`h-0.5 w-full bg-${
                isOnPokedex ? "primary" : "white"
              } rounded-lg`}
            ></div>
          </div>
        </button>
        <button
          className="flex h-12 px-3 items-start"
          onClick={() => goToTeams()}
        >
          <img
            src={teams}
            alt="teamsIcon"
            className={`mr-2 ${teamsIsOpen && "filter-primary"}`}
          />
          <div>
            <h2
              className={`text-base text-${
                teamsIsOpen ? "primary" : "black"
              } font-bold`}
            >
              Teams
            </h2>
            <div
              className={`h-0.5 w-full bg-${
                teamsIsOpen ? "primary" : "white"
              } rounded-lg`}
            ></div>
          </div>
        </button>
        <button
          className="flex h-12 px-3 items-start"
          onClick={() => goToFavorites()}
        >
          <img
            src={favpage}
            alt="favorites"
            className={`mr-2 ${favoritesIsOpen && "filter-primary"}`}
          />
          <div>
            <h2
              className={`text-base text-${
                favoritesIsOpen ? "primary" : "black"
              } font-bold`}
            >
              Favorites
            </h2>
            <div
              className={`h-0.5 w-full bg-${
                favoritesIsOpen ? "primary" : "white"
              } rounded-lg`}
            ></div>
          </div>
        </button>
      </div>

      <button
        className="flex h-12 px-3 items-start"
        onClick={() => goToSignIn()}
      >
        <img
          src={signin}
          alt="sign in"
          className={`mr-3 ${signInIsOpen && "filter-primary"}`}
        />
        <div>
          <h2
            className={`text-base text-${
              signInIsOpen ? "primary" : "black"
            } font-bold`}
          >
            Sign in
          </h2>
          <div
            className={`h-0.5 w-full bg-${
              signInIsOpen ? "primary" : "white"
            } rounded-lg`}
          ></div>
        </div>
      </button>
    </div>
  );
};

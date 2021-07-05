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
    <div className="hidden sm:flex border-b  border-lightgrey h-16 w-full pt-5 pb-6 px-6">
      <div className="flex justify-between w-full max-w-fullscreen mx-auto">
        <div className="flex">
          <button className="flex h-12 pr-3" onClick={() => goToPokedex()}>
            <div className="flex">
              <img
                src={pokedex}
                alt="pokedexIcon"
                className={`self-end mr-2 ${isOnPokedex && "filter-primary"}`}
              />
              <div className="self-end">
                <h2
                  className={`text-base text-${
                    isOnPokedex ? "primary" : "black"
                  } font-bold`}
                >
                  Pokedex
                </h2>
                {isOnPokedex && (
                  <div
                    className="h-0.5 w-full bg-primary
              } rounded-lg"
                  ></div>
                )}
              </div>
            </div>
          </button>
          <button
            className="flex h-12 px-3 items-start"
            onClick={() => goToTeams()}
          >
            <div className="flex">
              <img
                src={teams}
                alt="teamsIcon"
                className={`self-end mr-2 ${teamsIsOpen && "filter-primary"}`}
              />
              <div className="self-end">
                <h2
                  className={`text-base text-${
                    teamsIsOpen ? "primary" : "black"
                  } font-bold`}
                >
                  Teams
                </h2>
                {teamsIsOpen && (
                  <div
                    className="h-0.5 w-full bg-primary
              } rounded-lg"
                  ></div>
                )}
              </div>
            </div>
          </button>
          <button
            className="flex h-12 px-3 items-start"
            onClick={() => goToFavorites()}
          >
            <div className="flex">
              <img
                src={favpage}
                alt="favorites"
                className={`self-end mr-2 ${
                  favoritesIsOpen && "filter-primary"
                }`}
              />
              <div className="self-end">
                <h2
                  className={`text-base text-${
                    favoritesIsOpen ? "primary" : "black"
                  } font-bold`}
                >
                  Favorites
                </h2>
                {favoritesIsOpen && (
                  <div
                    className="h-0.5 w-full bg-primary
              } rounded-lg"
                  ></div>
                )}
              </div>
            </div>
          </button>
        </div>

        <button
          className="flex h-12 px-3 items-start"
          onClick={() => goToSignIn()}
        >
          <div className="flex">
            <img
              src={signin}
              alt="sign in"
              className={`self-center mr-3 ${signInIsOpen && "filter-primary"}`}
            />
            <div className="self-end">
              <h2
                className={`text-base text-${
                  signInIsOpen ? "primary" : "black"
                } font-bold`}
              >
                Sign in
              </h2>
              {signInIsOpen && (
                <div
                  className="h-0.5 w-full bg-primary
              } rounded-lg"
                ></div>
              )}
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

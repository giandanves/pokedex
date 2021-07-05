import pokedex from "./img/pokedex.svg";
import favpage from "./img/favpage.svg";
import teams from "./img/teams.svg";
import signin from "./img/signin.svg";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="hidden sm:flex border-b  border-lightgrey h-16 w-full pt-5 pb-6 px-6">
      <div className="flex justify-between w-full max-w-fullscreen mx-auto">
        <div className="flex">
          <Link to="/">
            <button className="flex h-12 pr-3">
              <div className="flex">
                <img
                  src={pokedex}
                  alt="pokedexIcon"
                  className={`self-end mr-2 ${
                    window.location.pathname === "/" && "filter-primary"
                  }`}
                />
                <div className="self-end">
                  <h2
                    className={`text-base text-${
                      window.location.pathname === "/" ? "primary" : "black"
                    } font-bold`}
                  >
                    Pokedex
                  </h2>
                  {window.location.pathname === "/" && (
                    <div
                      className="h-0.5 w-full bg-primary
              } rounded-lg"
                    ></div>
                  )}
                </div>
              </div>
            </button>
          </Link>
          <Link to="/teams">
            <button className="flex h-12 px-3 items-start">
              <div className="flex">
                <img
                  src={teams}
                  alt="teamsIcon"
                  className={`self-end mr-2 ${
                    window.location.pathname === "/teams" && "filter-primary"
                  }`}
                />
                <div className="self-end">
                  <h2
                    className={`text-base text-${
                      window.location.pathname === "/teams"
                        ? "primary"
                        : "black"
                    } font-bold`}
                  >
                    Teams
                  </h2>
                  {window.location.pathname === "/teams" && (
                    <div
                      className="h-0.5 w-full bg-primary
              } rounded-lg"
                    ></div>
                  )}
                </div>
              </div>
            </button>
          </Link>
          <Link to="/favorites">
            <button className="flex h-12 px-3 items-start">
              <div className="flex">
                <img
                  src={favpage}
                  alt="favorites"
                  className={`self-end mr-2 ${
                    window.location.pathname === "/favorites" &&
                    "filter-primary"
                  }`}
                />
                <div className="self-end">
                  <h2
                    className={`text-base text-${
                      window.location.pathname === "/favorites"
                        ? "primary"
                        : "black"
                    } font-bold`}
                  >
                    Favorites
                  </h2>
                  {window.location.pathname === "/favorites" && (
                    <div
                      className="h-0.5 w-full bg-primary
              } rounded-lg"
                    ></div>
                  )}
                </div>
              </div>
            </button>
          </Link>
        </div>
        <Link to="/signin">
          <button className="flex h-12 px-3 items-start">
            <div className="flex">
              <img
                src={signin}
                alt="sign in"
                className={`self-center mr-3 ${
                  window.location.pathname === "/signin" && "filter-primary"
                }`}
              />
              <div className="self-end">
                <h2
                  className={`text-base text-${
                    window.location.pathname === "/signin" ? "primary" : "black"
                  } font-bold`}
                >
                  Sign in
                </h2>
                {window.location.pathname === "/signin" && (
                  <div
                    className="h-0.5 w-full bg-primary
              } rounded-lg"
                  ></div>
                )}
              </div>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

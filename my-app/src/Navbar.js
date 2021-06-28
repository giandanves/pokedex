import pokedex from "./img/pokedex.svg";
import favpage from "./img/favpage.svg";
import teams from "./img/teams.svg";
import signin from "./img/signin.svg";
import { useContext } from "react";
import { FilterContext } from "./FilterContext";

export const Navbar = () => {
  const { teamsIsOpen, setTeamsIsOpen } = useContext(FilterContext);

  return (
    <div className="hidden sm:flex justify-between border-b border-lightgrey h-16 w-full max-w-fullscreen pt-5 pb-6 px-6">
      <div className="flex">
        <button
          className="flex h-12 pr-3 items-start"
          onClick={() => setTeamsIsOpen(false)}
        >
          <img src={pokedex} alt="pokedexIcon" className="mr-2" />
          <div>
            <h2 className="text-base text-black font-bold">Pokedex</h2>
            <div className="h-0.5 w-full bg-primary rounded-lg"></div>
          </div>
        </button>
        <button
          className="flex h-12 px-3 items-start"
          onClick={() => setTeamsIsOpen(true)}
        >
          <img src={teams} alt="teamsIcon" className="mr-2" />
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
        <button className="flex h-12 px-3 items-start">
          <img src={favpage} alt="favorites" className="mr-2" />
          <div>
            <h2 className="text-base text-black font-bold">Favorites</h2>
            <div className="h-0.5 w-full bg-white rounded-lg"></div>
          </div>
        </button>
      </div>

      <button className="flex h-12 px-3 items-start">
        <img src={signin} alt="sign in" className="mr-3" />
        <div>
          <h2 className="text-base text-black font-bold">Sign in</h2>
          <div className="h-0.5 w-full bg-white rounded-lg"></div>
        </div>
      </button>
    </div>
  );
};

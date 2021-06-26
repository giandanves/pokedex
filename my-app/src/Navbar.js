import pokedex from "./img/pokedex.svg";
import favpage from "./img/favpage.svg";
import teams from "./img/teams.svg";

export const Navbar = () => {
  return (
    <div className="flex justify-between border-b border-lightgrey h-16 w-full max-w-fullscreen py-6 px-5">
      <div className="flex">
        <button className="flex h-6 pr-3">
          <img src={pokedex} alt="pokedexIcon" className="mr-2" />
          <h2 className="text-base text-black font-bold">Pokedex</h2>
        </button>
        <button className="flex h-6 px-3">
          <img src={teams} alt="teamsIcon" className="mr-2" />
          <h2 className="text-base text-black font-bold">Teams</h2>
        </button>
        <button className="flex h-6 px-3">
          <img src={favpage} alt="favorites" className="mr-2" />
          <h2 className="text-base text-black font-bold">Favorites</h2>
        </button>
      </div>
      <h2 className="text-base h-6">Sign In</h2>
    </div>
  );
};

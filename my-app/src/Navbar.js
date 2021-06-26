import pokedex from "./img/pokedex.svg";
import favpage from "./img/favpage.svg";
import teams from "./img/teams.svg";
import signin from "./img/signin.svg";

export const Navbar = () => {
  return (
    <div className="hidden sm:flex justify-between border-b border-lightgrey h-16 w-full max-w-fullscreen py-6 px-5">
      <div className="flex">
        <button className="flex h-6 pr-3 items-center">
          <img src={pokedex} alt="pokedexIcon" className="mr-2" />
          <h2 className="text-base text-black font-bold">Pokedex</h2>
        </button>
        <button className="flex h-6 px-3 items-center">
          <img src={teams} alt="teamsIcon" className="mr-2" />
          <h2 className="text-base text-black font-bold">Teams</h2>
        </button>
        <button className="flex h-6 px-3 items-center">
          <img src={favpage} alt="favorites" className="mr-2" />
          <h2 className="text-base text-black font-bold">Favorites</h2>
        </button>
      </div>

      <button className="flex h-6 px-3 items-center">
        <img src={signin} alt="sign in" className="mr-3" />
        <h2 className="text-base text-black font-bold">Sign in</h2>
      </button>
    </div>
  );
};

import pokedex from "./img/pokedex.svg";
import favpage from "./img/favpage.svg";
import teams from "./img/teams.svg";
import signin from "./img/signin.svg";

export const NavbarMobile = () => {
  return (
    <div className="fixed bottom-0 sm:hidden flex w-full h-14 justify-between bg-lightgrey px-10 rounded-t-2xl">
      <button className="flex flex-col h-full items-center justify-between">
        <div className="h-full flex flex-col justify-center">
          <img src={pokedex} alt="pokedexIcon" className="" />
        </div>
        <div className="h-1 w-10 bg-primary rounded-lg"></div>
      </button>
      <button className="flex flex-col h-full items-center justify-between">
        <div className="h-full flex flex-col justify-center">
          <img src={teams} alt="pokedexIcon" className="w-5" />
        </div>
        <div className="h-1 w-10 bg-lightgrey rounded-lg"></div>
      </button>
      <button className="flex flex-col h-full items-center justify-between">
        <div className="h-full flex flex-col justify-center">
          <img src={favpage} alt="favorites" className="" />
        </div>
        <div className="h-1 w-10 bg-lightgrey rounded-lg"></div>
      </button>
      <button className="flex flex-col h-full items-center justify-between">
        <div className="h-full flex flex-col justify-center">
          <img src={signin} alt="sign in" className="" />
        </div>
        <div className="h-1 w-10 bg-lightgrey rounded-lg"></div>
      </button>
    </div>
  );
};

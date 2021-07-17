import numberToThreeDigits from "../../numberToThreeDigits";
import prevIcon from "../../img/previous.svg";
import nextIcon from "../../img/next.svg";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

function BottomNavigation({ pokemon }) {
  let prevPokemon = "loading";
  let nextPokemon = "loading";
  const { data } = useQuery(
    `http://pokedex.jhonnymichel.com/pokemon?&limit=3&offset=${
      pokemon ? pokemon.id - 2 : 0
    }`,
    {
      retry: false,
    }
  );

  if (data) {
    prevPokemon = data.results.find((element) => element.id === pokemon.id - 1);
    nextPokemon = data.results.find((element) => element.id === pokemon.id + 1);
  }

  return (
    <div className="fixed flex bottom-0 left-0 w-full  self-center justify-between p-4  bg-white h-16 rounded-tl-3xl rounded-tr-3xl border border-black-50">
      <div className="flex">
        {prevPokemon && (
          <Link to={`${prevPokemon.name}`}>
            <img className="pt-1" src={prevIcon} alt="see previous pokemon" />
          </Link>
        )}
        {prevPokemon && (
          <div className="px-4">
            <p className="text-subtitle leading-subtitle text-black-500 font-bold">
              {prevPokemon.id
                ? "#" + numberToThreeDigits(prevPokemon.id)
                : "Loading..."}
            </p>
            <h3 className="capitalize text-sm text-black font-bold">
              {prevPokemon.name || "Loading..."}
            </h3>
          </div>
        )}
      </div>
      {nextPokemon && (
        <div className="flex">
          <div className="px-4">
            <p className="text-subtitle leading-subtitle text-black-500 font-bold text-right">
              {nextPokemon.id
                ? "#" + numberToThreeDigits(nextPokemon.id)
                : "Loading..."}
            </p>
            <h3 className="capitalize text-sm text-black font-bold">
              {nextPokemon.name || "Loading..."}
            </h3>
          </div>
          <Link to={`${nextPokemon.name}`}>
            <img className="pt-1" src={nextIcon} alt="see next pokemon" />
          </Link>
        </div>
      )}
    </div>
  );
}

export default BottomNavigation;

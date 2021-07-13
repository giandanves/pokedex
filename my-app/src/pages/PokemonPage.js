import { useQuery } from "react-query";
import { useParams } from "react-router";
import classNames from "classnames";
import getBackground from "../getBackground";
import numberToThreeDigits from "../numberToThreeDigits";

const PokemonPage = () => {
  const { name } = useParams();

  const { data: pokemon } = useQuery(
    `http://pokedex.jhonnymichel.com/pokemon/${name}`,
    {
      retry: false,
    }
  );

  if (pokemon) {
    console.dir(pokemon);
    const picture = pokemon.sprites.other["official-artwork"].front_default;
    const type = pokemon.types[0].type.name;
    return (
      <section className="flex flex-1  w-full self-center max-w-screen-2-x-l -mx-2 relative">
        <div
          className={classNames(
            getBackground(type),
            "to-transparent w-5/12 bg-opacity-20 bg-gradient-to-br flex items-center justify-center p-2"
          )}
        >
          <div className="max-w-sm">
            <img src={picture} alt="name" />
          </div>
        </div>
        <div className="w-7/12  pb-20">
          <div className="p-8">
            <h1 className="capitalize font-bold text-2xl">{name}</h1>
            <p className="text-black-500 font-bold text-sm">
              {"#" + numberToThreeDigits(pokemon.id)}
            </p>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 w-full  self-center  bg-white h-20 rounded-tl-3xl rounded-tr-3xl p-4 border">
          Bottom Navigation
        </div>
      </section>
    );
  } else {
    return "loading";
  }
};

export default PokemonPage;

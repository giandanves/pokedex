import { useQuery } from "react-query";
import { useParams } from "react-router";
import classNames from "classnames";
import getBorderColor from "../getBorderColor";
import favIcon from "../img/favorite-icon.svg";
import expand from "../img/expand.svg";
import getBackground from "../getBackground";
import numberToThreeDigits from "../numberToThreeDigits";
import Button from "../components/Button";
import CardInfo from "../CardInfo";
import getStatPercentage from "./getStatPercentage";

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
    const hp = pokemon.stats.find((stat) => stat.stat.name === "hp");
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
        <div className="w-6/12 pb-20 p-8">
          <div className="flex justify-between">
            <div>
              <h1 className="capitalize font-bold text-black text-2xl">
                {name}
              </h1>
              <p className="text-black-500 font-bold text-sm">
                {"#" + numberToThreeDigits(pokemon.id)}
              </p>
            </div>
            <div className="flex items-center">
              <Button
                textColor={"white"}
                bg={"primary"}
                children={"+ Add to team"}
                addClass={"py-2 px-3"}
              />
              <img
                className="h-5 mr-[10px] ml-[18px]"
                src={favIcon}
                alt="add to favorite"
              />
            </div>
          </div>
          <div className="pt-8 flex justify-between">
            <h2 className="text-black font-bold text-base">About</h2>
            <div className="flex">
              <p className="text-base text-primary font-bold">Gen 8</p>
              <img
                className="filter-primary ml-2"
                src={expand}
                alt="more generations"
              />
            </div>
          </div>
          <p className="py-4 text-sm text-black-700 font-normal">
            From the time it is born, this pokemon is crying for it's
            girlfriend.
          </p>
          <div className="flex">
            <CardInfo title={"Height"} value={pokemon.height / 10 + "m"} />
            <CardInfo title={"Category"} value={"Digimon"} />
            <CardInfo title={"Weight"} value={pokemon.weight / 10 + "kg"} />
            <CardInfo title={"Gender"} value={"Fluid"} />
          </div>

          <div className="py-6">
            <h2 className="pb-2 font-bold text-xs text-black-500">Type</h2>
            <div className="flex">
              {pokemon.types.map((poketype) => {
                return (
                  <p
                    className={classNames(
                      "capitalize flex text-xs p-2 mr-1  text-black font-bold items-center self-center rounded border",
                      getBorderColor(poketype.type.name)
                    )}
                  >
                    {poketype.type.name}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="border border-dashed border-black-100" />

          <p>HP: {getStatPercentage(hp.base_stat)}%</p>
          <div className="h-2 bg-black-50 w-5/12">
            <div
              className={`h-2 bg-primary w-[${getStatPercentage(
                hp.base_stat
              )}%]`}
            ></div>
          </div>
        </div>
        <div className="flex flex-1 w-1/12 bg-white"></div>
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

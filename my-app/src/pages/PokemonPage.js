import { useQuery } from "react-query";
import { useParams } from "react-router";
import prevIcon from "../img/previous.svg";
import nextIcon from "../img/next.svg";
import classNames from "classnames";
import getBorderColor from "../getBorderColor";
import favIcon from "../img/favorite-icon.svg";
import expand from "../img/expand.svg";
import getBackground from "../getBackground";
import numberToThreeDigits from "../numberToThreeDigits";
import Button from "../components/Button";
import CardInfo from "../CardInfo";
import { Link } from "react-router-dom";
import getStatPercentage from "./getStatPercentage";
import getAbilities from "../getAbilities";

const PokemonPage = () => {
  const { name } = useParams();

  const { data: pokemon } = useQuery(
    `http://pokedex.jhonnymichel.com/pokemon/${name}`,
    {
      retry: false,
    }
  );

  const { data } = useQuery(
    `http://pokedex.jhonnymichel.com/pokemon?&limit=3&offset=${
      pokemon ? pokemon.id - 2 : 0
    }`,
    {
      retry: false,
    }
  );

  if (pokemon) {
    console.dir(data);
    console.dir(pokemon);
    const picture = pokemon.sprites.other["official-artwork"].front_default;
    const type = pokemon.types[0].type.name;
    const hp = pokemon.stats.find((stat) => stat.stat.name === "hp");
    const attack = pokemon.stats.find((stat) => stat.stat.name === "attack");
    const defense = pokemon.stats.find((stat) => stat.stat.name === "defense");
    const specialAttack = pokemon.stats.find(
      (stat) => stat.stat.name === "special-attack"
    );
    const specialDefense = pokemon.stats.find(
      (stat) => stat.stat.name === "special-defense"
    );
    const speed = pokemon.stats.find((stat) => stat.stat.name === "speed");
    let prevPokemon = "loading";
    let nextPokemon = "loading";

    if (data) {
      prevPokemon = data.results.find(
        (element) => element.id === pokemon.id - 1
      );
      nextPokemon = data.results.find(
        (element) => element.id === pokemon.id + 1
      );
    }

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
            That's the area where pokemon description will be showed.
          </p>
          <div className="flex">
            <div className="flex">
              <CardInfo title={"Height"} value={pokemon.height / 10 + "m"} />
              <CardInfo title={"Category"} value={"no data"} />
              <CardInfo title={"Weight"} value={pokemon.weight / 10 + "kg"} />
              <CardInfo title={"Gender"} value={"no data"} />
            </div>
            <CardInfo
              title={"Abilities"}
              value={getAbilities(pokemon.abilities)}
              addClass={"w-full"}
              textAlign={"text-left"}
            />
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
          <div className="flex">
            <article className="w-5/12">
              <h2 className="pt-6 pb-4 text-base font-bold text-black">
                Stats
              </h2>
              <p className="text-dark text-xs font-bold pb-1">HP</p>
              <div className="h-2 bg-black-50 w-full rounded mb-4">
                <div
                  className="h-2 bg-primary rounded"
                  style={{ width: getStatPercentage(hp.base_stat) }}
                ></div>
              </div>
              <p className="text-dark text-xs font-bold pb-1">Attack</p>
              <div className="h-2 bg-black-50 w-full rounded mb-4">
                <div
                  className="h-2 bg-primary rounded"
                  style={{ width: getStatPercentage(attack.base_stat) }}
                ></div>
              </div>
              <p className="text-dark text-xs font-bold pb-1">Defense</p>
              <div className="h-2 bg-black-50 w-full rounded mb-4">
                <div
                  className="h-2 bg-primary rounded"
                  style={{ width: getStatPercentage(defense.base_stat) }}
                ></div>
              </div>
              <p className="text-dark text-xs font-bold pb-1">Special attack</p>
              <div className="h-2 bg-black-50 w-full rounded mb-4">
                <div
                  className="h-2 bg-primary rounded"
                  style={{ width: getStatPercentage(specialAttack.base_stat) }}
                ></div>
              </div>
              <p className="text-dark text-xs font-bold pb-1">
                Special defense
              </p>
              <div className="h-2 bg-black-50 w-full rounded mb-4">
                <div
                  className="h-2 bg-primary rounded"
                  style={{ width: getStatPercentage(specialDefense.base_stat) }}
                ></div>
              </div>
              <p className="text-dark text-xs font-bold pb-1">Speed</p>
              <div className="h-2 bg-black-50 w-full rounded mb-4">
                <div
                  className="h-2 bg-primary rounded"
                  style={{ width: getStatPercentage(speed.base_stat) }}
                ></div>
              </div>
            </article>
            <article className="pl-8 w-7/12">
              <h2 className="pt-6 pb-4 text-base font-bold text-black">
                Evolutions
              </h2>
              <div className="w-full">
                <p className="w-full text-center pt-10">Placeholder</p>
              </div>
            </article>
          </div>
          <div className="border border-dashed border-black-100 mt-5" />
          <h2 className="pt-4 pb-2 text-base font-bold text-black">Teams</h2>
          <div>
            <h3 className="text-sm text-black-700 font-normal">No teams yet</h3>
            <p className="text-sm text-primary font-normal">Add to team</p>
          </div>
        </div>
        <div className="flex flex-1 w-1/12 bg-white"></div>
        <div className="fixed flex bottom-0 left-0 w-full  self-center justify-between p-4  bg-white h-16 rounded-tl-3xl rounded-tr-3xl border border-black-50">
          <div className="flex">
            <Link to={`${prevPokemon.name}`}>
              <img className="pt-1" src={prevIcon} alt="see previous pokemon" />
            </Link>
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
          </div>
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
        </div>
      </section>
    );
  } else {
    return "loading";
  }
};

export default PokemonPage;

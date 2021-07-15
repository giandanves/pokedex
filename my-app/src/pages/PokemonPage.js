import classNames from "classnames";
import getBorderColor from "../getBorderColor";
import favIcon from "../img/favorite-icon.svg";
import expand from "../img/expand.svg";
import Button from "../components/Button";
import PictureContainer from "./PokemonPageComponents/PictureContainer";
import Header from "./PokemonPageComponents/Header";
import CardsContainer from "./PokemonPageComponents/CardsContainer";
import StatsContainer from "./PokemonPageComponents/StatsContainer";
import BottomNavigation from "./PokemonPageComponents/BottomNavigation";

const PokemonPage = ({ pokemon, name }) => {
  const picture = pokemon.sprites.other["official-artwork"].front_default;
  const type = pokemon.types[0].type.name;

  return (
    <section className="flex flex-1  w-full self-center max-w-screen-2-x-l -mx-2 relative">
      <PictureContainer type={type} picture={picture} />
      <div className="w-6/12 pb-20 p-8">
        <div className="flex justify-between">
          <Header name={name} id={pokemon.id} />
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
        <CardsContainer
          height={pokemon.height}
          weight={pokemon.weight}
          abilities={pokemon.abilities}
        />
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
          <StatsContainer pokemon={pokemon} />
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
      <BottomNavigation pokemon={pokemon} />
    </section>
  );
};

export default PokemonPage;

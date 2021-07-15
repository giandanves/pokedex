import PictureContainer from "./PokemonPageComponents/PictureContainer";
import Header from "./PokemonPageComponents/Header";
import CardsContainer from "./PokemonPageComponents/CardsContainer";
import StatsContainer from "./PokemonPageComponents/StatsContainer";
import BottomNavigation from "./PokemonPageComponents/BottomNavigation";
import TypeCard from "./PokemonPageComponents/TypeCard";
import ActionsCard from "./PokemonPageComponents/ActionsCard";
import About from "./PokemonPageComponents/About";

const PokemonPage = ({ pokemon, name }) => {
  const picture = pokemon.sprites.other["official-artwork"].front_default;
  const type = pokemon.types[0].type.name;

  return (
    <section className="flex flex-1  w-full self-center max-w-screen-2-x-l -mx-2 relative">
      <PictureContainer type={type} picture={picture} />
      <div className="w-6/12 pb-20 p-8">
        <div className="flex justify-between">
          <Header name={name} id={pokemon.id} />
          <ActionsCard />
        </div>
        <About />
        <CardsContainer
          height={pokemon.height}
          weight={pokemon.weight}
          abilities={pokemon.abilities}
        />
        <TypeCard pokemon={pokemon} />
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

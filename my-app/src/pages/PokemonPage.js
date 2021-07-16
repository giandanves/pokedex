import PictureContainer from "./PokemonPageComponents/PictureContainer";
import Header from "./PokemonPageComponents/Header";
import CardsContainer from "./PokemonPageComponents/CardsContainer";
import StatsContainer from "./PokemonPageComponents/StatsContainer";
import BottomNavigation from "./PokemonPageComponents/BottomNavigation";
import TypeCard from "./PokemonPageComponents/TypeCard";
import ActionsCard from "./PokemonPageComponents/ActionsCard";
import About from "./PokemonPageComponents/About";
import FieldWrapper from "./PokemonPageComponents/FieldWrapper";
import EvolutionsContainer from "./PokemonPageComponents/EvolutionsContainer";
import TeamsCard from "./PokemonPageComponents/TeamsCard";

const PokemonPage = ({ pokemon, name }) => {
  const picture = pokemon.sprites.other["official-artwork"].front_default;
  const type = pokemon.types[0].type.name;

  return (
    <section className="block sm:flex sm:flex-1  w-full self-center max-w-screen-2-x-l -mx-2 relative">
      <PictureContainer type={type} picture={picture} />
      <div className="w-full sm:w-6/12 pb-20 p-8">
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
        <FieldWrapper />
        <div className="flex">
          <StatsContainer pokemon={pokemon} />
          <EvolutionsContainer />
        </div>
        <FieldWrapper />
        <TeamsCard />
      </div>
      <div className="hidden sm:flex flex-1 w-1/12 bg-white"></div>
      <BottomNavigation pokemon={pokemon} />
    </section>
  );
};

export default PokemonPage;

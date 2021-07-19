import { useQuery } from "react-query";
import { useParams } from "react-router";
import { Pokemons } from "../Pokemons";
import PokemonPage from "./PokemonPage";
import ResourceState from "../ResourceState";
import Loading from "../loading";
import Error from "../error";

const PokemonPageIndex = () => {
  const { name } = useParams();

  const {
    isLoading,
    error,
    data: pokemon,
    refetch,
  } = useQuery(`http://pokedex.jhonnymichel.com/pokemon/${name}`, {
    retry: false,
  });

  return (
    <ResourceState
      loading={isLoading}
      renderLoading={() => <Loading />}
      error={error}
      message={pokemon?.message}
      pokemons={pokemon?.results}
      renderDigivirusState={() => (
        <Error
          error={"XXX"}
          refetch={refetch}
          message={pokemon?.message}
          renderDigimons={() => <Pokemons pokemons={pokemon.results} />}
        />
      )}
      renderError={() => <Error error={error} refetch={refetch} />}
      render={() => <PokemonPage pokemon={pokemon} name={name} />}
    />
  );
};

export default PokemonPageIndex;

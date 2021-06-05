import { useFetch } from "./useFetch";
import { useState } from "react";
import { Pokemons } from "./Pokemons";
import { PokemonTypes } from "./PokemonTypes.js";
import { handleLoadAndError } from "./HandleLoadAndError";
import { HeightCheckBox } from "./height-checkbox";
import { WeightCheckBox } from "./weight-checkbox";
import { TextBox } from "./textBox";
import { getBoxesChecked } from "./getBoxesCheckeds";
import { initialCheckboxValue } from "./initialCheckboxValues";
const defaultUrl = process.env.REACT_APP_DEFAULT_URL;
const poketypesUrl = process.env.REACT_APP_POKETYPES_URL;

function App() {
  let [url, setUrl] = useState(defaultUrl);
  const [loading, pokemons, error] = useFetch(url);
  const typeList = useFetch(poketypesUrl);
  const [typeIsLoading, typeResult, typeHasError] = typeList;

  const [formState, setFormState] = useState({
    search: "",
    weights: initialCheckboxValue(6),
    types: initialCheckboxValue(20),
    heights: initialCheckboxValue(6),
  });

  const handleFilter = (filter) => {
    const { search, weights, types, heights } = formState;
    if (search) {
      filter += `search=${search}&`;
    }
    filter += getBoxesChecked(heights, weights, types, typeResult.results);
    return filter;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    let filter = "?";
    filter = handleFilter(filter);
    url = defaultUrl;
    setUrl(url + filter);
  };

  return (
    <>
      <form id="search-form">
        <button type="submit" onClick={(e) => handleSearch(e)}>
          Search
        </button>
        <TextBox formState={formState} setFormState={setFormState} />
        <HeightCheckBox formState={formState} setFormState={setFormState} />
        <WeightCheckBox formState={formState} setFormState={setFormState} />

        <section className="typePokemonContainer">
          {handleLoadAndError(typeIsLoading, typeHasError) || (
            <PokemonTypes
              types={typeResult.results}
              formState={formState}
              setFormState={setFormState}
            />
          )}
        </section>
        <button
          onClick={(e) => {
            e.preventDefault();
            setFormState({
              search: "",
              weights: initialCheckboxValue(6),
              types: initialCheckboxValue(20),
              heights: initialCheckboxValue(6),
            });
          }}
        >
          clear all
        </button>
        <ul className="PokemonsContainer">
          {handleLoadAndError(loading, error) || (
            <Pokemons pokemons={pokemons} />
          )}
        </ul>
      </form>
    </>
  );
}

export default App;

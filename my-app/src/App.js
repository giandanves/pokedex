import { useFetch } from "./useFetch";
import { useState } from "react";
import { Pokemons } from "./Pokemons";
import { PokemonTypes } from "./PokemonTypes.js";
import { handleLoadAndError } from "./HandleLoadAndError";
import { HeightCheckBox } from "./height-checkbox";
import { WeightCheckBox } from "./weight-checkbox";
import { TextBox } from "./textBox";
import { DropdownBox } from "./DropdownBox";
import { getUrl } from "./getUrl";
import { initialCheckboxValue } from "./initialCheckboxValues";
const defaultUrl = process.env.REACT_APP_DEFAULT_URL;
const poketypesUrl = process.env.REACT_APP_POKETYPES_URL;

function App() {
  let [url, setUrl] = useState(defaultUrl);
  const [limit, setLimit] = useState(10);

  const getLimit = () => {
    return `&limit=${limit}`;
  };
  const [loading, pokemons, error, refetchData] = useFetch(url + getLimit());
  const typeList = useFetch(poketypesUrl);
  const [typeIsLoading, typeResult, typeHasError, refetchTypes] = typeList;

  const [formState, setFormState] = useState({
    search: "",
    limit: 10,
    weights: initialCheckboxValue(6),
    types: initialCheckboxValue(20),
    heights: initialCheckboxValue(6),
  });

  const newFetch = (e) => {
    e.preventDefault();
    refetchData();
  };

  const refetchTypeList = (e) => {
    e.preventDefault();
    refetchTypes();
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const { search, weights, types, heights } = formState;
    url = defaultUrl;
    const results = typeResult.results;
    const filterParams = {
      heights,
      weights,
      types,
      results,
      search,
      url,
    };
    const filteredUrl = getUrl(filterParams);
    setUrl(filteredUrl);
  };

  return (
    <>
      <form id="search-form">
        <div className="search-box">
          <TextBox formState={formState} setFormState={setFormState} />
          <button type="submit" onClick={(e) => handleSearch(e)}>
            Search
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setUrl(defaultUrl);
              refetchData();
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
        </div>

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
          {error ? (
            <button onClick={(e) => refetchTypeList(e)}>Try Again</button>
          ) : (
            <></>
          )}
        </section>

        <ul className="PokemonsContainer">
          {handleLoadAndError(loading, error) || (
            <Pokemons pokemons={pokemons} />
          )}
          {error ? (
            <button onClick={(e) => newFetch(e)}>Try Again</button>
          ) : (
            <></>
          )}
        </ul>
        <DropdownBox setLimit={setLimit} />
      </form>
    </>
  );
}

export default App;

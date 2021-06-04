import { useFetch } from "./useFetch";
import { useState, useRef } from "react";
import { Pokemons } from "./Pokemons";
import { PokemonTypes } from "./PokemonTypes.js";
import { handleLoadAndError } from "./HandleLoadAndError";
import { HeightCheckBox } from "./height-checkbox";
import { WeightCheckBox } from "./weight-checkbox";

const defaultUrl = process.env.REACT_APP_DEFAULT_URL;
const poketypesUrl = process.env.REACT_APP_POKETYPES_URL;

function App() {
  let [url, setUrl] = useState(defaultUrl);
  const [loading, pokemons, error] = useFetch(url);
  const types = useFetch(poketypesUrl);

  const form = useRef(null);
  const inputText = useRef(null);

  const [typeIsLoading, typeResult, typeHasError] = types;

  const handleFilter = (filter) => {
    const formElements = Array.from(form.current);
    formElements.forEach((element) => {
      if (element.checked) {
        filter += `${element.id}&`;
      }
    });
    return filter;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    let filter = "?";
    if (inputText.current.value) {
      filter += `search=${inputText.current.value}&`;
    } else {
      filter = handleFilter(filter);
    }
    url = defaultUrl;
    console.log(url + filter);
    setUrl(url + filter);
  };

  return (
    <>
      <form id="search-form" ref={form}>
        <button type="submit" onClick={(e) => handleSearch(e)}>
          Search
        </button>
        <input type="text" id="text-area" ref={inputText}></input>
        <HeightCheckBox />
        <WeightCheckBox />

        <section className="typePokemonContainer">
          {handleLoadAndError(typeIsLoading, typeHasError) || (
            <PokemonTypes types={typeResult.results} />
          )}
        </section>

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

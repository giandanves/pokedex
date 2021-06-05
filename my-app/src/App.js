import { useFetch } from "./useFetch";
import { useState } from "react";
import { Pokemons } from "./Pokemons";
import { PokemonTypes } from "./PokemonTypes.js";
import { handleLoadAndError } from "./HandleLoadAndError";
import { HeightCheckBox } from "./height-checkbox";
import { WeightCheckBox } from "./weight-checkbox";
import { TextBox } from "./textBox";
import { getBoxesChecked } from "./handleCheckBox";

const defaultUrl = process.env.REACT_APP_DEFAULT_URL;
const poketypesUrl = process.env.REACT_APP_POKETYPES_URL;

function App() {
  let [url, setUrl] = useState(defaultUrl);
  const [loading, pokemons, error] = useFetch(url);
  const types = useFetch(poketypesUrl);
  const [typeIsLoading, typeResult, typeHasError] = types;

  const [formState, setFormState] = useState({
    search: "",
    weights: [],
    types: [],
    heights: [null, false, false, false, false, false],
  });

  const [textBox, setTextBox] = useState("");
  const [heightBoxesCheckeds, setHeightBoxesCheckeds] = useState([]);
  const [weightBoxesCheckeds, setWeightBoxesCheckeds] = useState([]);
  const [poketypesCheckeds, setPoketypesCheckeds] = useState([]);

  const handleFilter = (filter) => {
    if (textBox) {
      filter += `search=${textBox}&`;
    }
    filter += getBoxesChecked(
      heightBoxesCheckeds,
      weightBoxesCheckeds,
      poketypesCheckeds
    );
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

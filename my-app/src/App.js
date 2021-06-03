import {useFetch} from './useFetch'
import {useState, useRef, useEffect} from 'react'
import {Pokemons} from './Pokemons'
import {PokemonTypes} from './PokemonTypes.js'
import {handleLoadAndError} from './HandleLoadAndError'
import {HeightCheckBox} from './height-checkbox'
import {WeightCheckBox} from './weight-checkbox'


const defaultUrl = process.env.REACT_APP_DEFAULT_URL;
const poketypesUrl = process.env.REACT_APP_POKETYPES_URL;

function App() {
let [url, setUrl] = useState(defaultUrl);
const [loading, pokemons, error] = useFetch(url);
const types = useFetch(poketypesUrl);
let [typeIsLoading, typeResult, typeHasError] = types;
let filter = '?';
const form = useRef(null);
const inputText = useRef(null);

useEffect(()=>{
  [typeIsLoading, typeResult, typeHasError] = types;
}, [types])


const handleFilter = () => {
  const formElements = Array.from(form.current);
  let criteriaHolder = "";
  formElements.forEach((element)=> {
    if (element.checked) {
      criteriaHolder += `${element.id}&`;
    }
  })
  filter +=criteriaHolder;
}


const handleSearch = (e) => {
  e.preventDefault();
      filter = "?";
  if (inputText.current.value) {
    filter+= `search=${inputText.current.value}&`
  } 
  url = defaultUrl;
  handleFilter();
  setUrl(url + filter);
  
}

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
        {handleLoadAndError(loading, error) ? (
          handleLoadAndError(loading, error)
        ) : (
          <Pokemons pokemons={pokemons} />
        )}
      </ul>
    </form>
  </>
);
}

export default App;

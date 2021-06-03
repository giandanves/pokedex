import {useFetch} from './useFetch'
import {useState} from 'react'
import {Pokemons} from './Pokemons'
import {PokemonTypes} from './PokemonTypes.js'
import {handleLoadAndError} from './HandleLoadAndError'
import {HeightCheckBox} from './height-checkbox'
import {WeightCheckBox} from './weight-checkbox'

function App() {
const defaultUrlValue = "http://pokedex.jhonnymichel.com/pokemon";
let [url, setUrl] = useState(defaultUrlValue);
const [loading, products, error] = useFetch(url);
const types = useFetch("http://pokedex.jhonnymichel.com/type");
let filter = '?';

const handleFilter = () => {
  const formElements = document.querySelector("#search-form").elements;
  let criteriaHolder = "";
  for (let i = 0; i < formElements.length; i++) {
    if (formElements[i].checked) {
      criteriaHolder += `${formElements[i].id}&`;
    }
  }
  filter +=criteriaHolder;
}


const handleSearch = (e) => {
  e.preventDefault();
      filter = "?";
  const inputVal = document.getElementById("text-area").value;
  if (inputVal) {
    filter+= `search=${inputVal}&`
  } 
  console.log(filter);
  url = defaultUrlValue;
  handleFilter();
  setUrl(url + filter);
  
}

return (
  <>
    <form id="search-form">
      <button type="submit" onClick={(e) => handleSearch(e)}>
        Search
      </button>
      <input type = 'text' id='text-area'></input>
      <HeightCheckBox/>
      <WeightCheckBox/>
      <section className = 'typePokemonContainer'>
        {handleLoadAndError(types[0], types[2]) ? (
          handleLoadAndError(types[0], types[2])
        ) : (
          <PokemonTypes types={types[1].results} />
        )}
      </section>

      <ul className ='PokemonsContainer'>
        {handleLoadAndError(loading, error) ? (
          handleLoadAndError(loading, error)
        ) : (
          <Pokemons pokemons={products} />
        )}
      </ul>
    </form>
  </>
);
}

export default App;

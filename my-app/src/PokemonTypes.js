import {useRef} from 'react'
import {handleCheckBox} from './handleCheckBox'

export function PokemonTypes(props) {
  const { types, poketypesCheckeds, setPoketypesCheckeds } = props;
  const poketypeRefs = useRef([]);


  return (
    <section>
      <p>Types</p>
      {types.map((pokeType, i) => {
        return (
          <>
            <input
              type="checkbox"
              id={`type=${pokeType.name}`}
              name="type"
              key={pokeType.url}
              ref={(element) => poketypeRefs.current.push(element)}
              onChange={() => handleCheckBox(poketypeRefs.current[i], poketypesCheckeds, setPoketypesCheckeds)}
            />
            <label key={pokeType.name}>{pokeType.name}</label>
          </>
        );
      })}
    </section>
  );
}

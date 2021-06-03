export function PokemonTypes(props){
  const { types } = props;
  return (
    <section>
      <p>Types</p>
      {types.map((pokeType) => {
        return (
          <>
            <input
              type="checkbox"
              id={`type=${pokeType.name}`}
              name="type"
              key={pokeType.url}
            />
            <label key={pokeType.name}>{pokeType.name}</label>
          </>
        );
      })}
    </section>
  );
};

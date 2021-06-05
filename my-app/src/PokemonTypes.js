export function PokemonTypes(props) {
  const { types, formState, setFormState } = props;

  const clearAll = (e) => {
    e.preventDefault();
    setFormState((prev) => {
      let auxBoolean = false;
      prev.types.forEach((type, i) => {
        prev.types[i] = auxBoolean;
      });
      return { ...prev };
    });
  };

  const handleCheckBox = (i, checkBox) => {
    const isChecked = !checkBox;
    setFormState((prev) => {
      prev.types[i] = isChecked;
      return { ...prev };
    });
  };

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
              checked={formState.types[i]}
              onChange={() =>
                handleCheckBox(i, formState.types[i], `type=${pokeType.name}`)
              }
            />
            <label key={pokeType.name}>{pokeType.name}</label>
          </>
        );
      })}
      <button onClick={(e) => clearAll(e)}>clear</button>
    </section>
  );
}

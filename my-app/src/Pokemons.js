export function Pokemons(props) {
  const { pokemons } = props;
  return (
    <section>
      {pokemons.map((pokemon) => {
        return (
          <article className="pokemon-card" key={pokemon.id}>
            <li>
              <img
                className="pokemon-avatar"
                src={pokemon.picture}
                alt={pokemon.name}
              />
              <h2>{pokemon.name}</h2>
              <div className="types-grid">
                <p>{pokemon.type[0]}</p>
                <p>{pokemon.type[1] ? pokemon.type[1] : ""}</p>
              </div>
            </li>
          </article>
        );
      })}
    </section>
  );
};

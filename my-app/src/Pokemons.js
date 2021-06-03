
export function Pokemons(props) {
  const { pokemons } = props;
  return (
    <section>
      {pokemons.map((pokemon) => {
        const { picture, name, id } = pokemon;
        const [firstType, secondType] = pokemon.type;

        return (
          <article className="pokemon-card" key={id}>
            <li>
              <img className="pokemon-avatar" src={picture} alt={name} />
              <h2>{name}</h2>
              <div className="types-grid">
                <p>{firstType}</p>
                <p>{secondType || ""}</p>
                <p>{`id: #${id}`}</p>
              </div>
            </li>
          </article>
        );
      })}
    </section>
  );
}

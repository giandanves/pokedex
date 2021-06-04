export function Pokemons(props) {
  const { pokemons } = props;
  return (
    <section>
      {pokemons.map((pokemon, i) => {
        const { picture, name, id, type } = pokemon;
        if (i < 50) {
          return (
            <article className="pokemon-card" key={id}>
              <li>
                <img className="pokemon-avatar" src={picture} alt={name} />
                <h2>{name}</h2>
                <div className="types-grid">
                  {type.map((poketype, i) => {
                    if (i === 1) {
                      return <p>{`- ${poketype}`}</p>;
                    }
                    return <p>{poketype}</p>;
                  })}
                  <p>{`id: #${id}`}</p>
                </div>
              </li>
            </article>
          );
        } else {
          return <></>;
        }
      })}
    </section>
  );
}

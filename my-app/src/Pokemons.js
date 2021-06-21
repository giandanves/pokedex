import addIcon from "./img/add-icon.svg";
import favoriteIcon from "./img/favorite-icon.svg";

export function Pokemons(props) {
  const { pokemons } = props;

  const getThreeDigits = (n) => {
    if (n < 10) {
      return "00" + n;
    }
    if (n < 100) {
      return "0" + n;
    }
    return n;
  };
  return (
    <section className="flex space-x-5 space-y-5 flex-wrap">
      {pokemons.length === 0 ? (
        <p>
          No Pokemons matches this criterias, change the filters and try again
        </p>
      ) : (
        pokemons.map((pokemon, i) => {
          const { picture, name, id, type } = pokemon;

          return (
            <article
              className={`border border-${type[0]} rounded-md h-card w-card`}
              key={id}
            >
              <li
                className={`w-full bg-gradient-to-br from-${type[0]} to-transparent h-full flex flex-col items-center justify-end`}
              >
                <div className="flex items-stretch">
                  <p className="text-subtitle self-start font-bold">
                    {"#" + getThreeDigits(id)}
                  </p>
                  <img className="" src={addIcon} alt="add Pokemon" />
                  <img src={favoriteIcon} alt="favorite Pokemon" />
                </div>
                <img className="h-avatar w-avatar" src={picture} alt={name} />
                <h2 className="font-nunito text-body-01 font-bold">{name}</h2>
                <div className=" flex bg-white h-1/6 w-full space-x-1">
                  {type.map((poketype, i) => {
                    if (i === 1) {
                      return (
                        <p
                          className={`h-4 text-subtitle leading-subtitle self-center rounded border border-${poketype}`}
                        >{`${poketype}`}</p>
                      );
                    }
                    return (
                      <p
                        className={`h-4 text-subtitle self-center leading-subtitle border rounded ml-1 border-${poketype}`}
                      >
                        {poketype}
                      </p>
                    );
                  })}
                </div>
              </li>
            </article>
          );
        })
      )}
    </section>
  );
}

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
    <div className="flex flex-wrap mx-auto max-w-screen-2xl">
      {pokemons.length === 0 ? (
        <p>
          No Pokemons matches this criterias, change the filters and try again
        </p>
      ) : (
        pokemons.map((pokemon, i) => {
          const { picture, name, id, type } = pokemon;

          return (
            <div className={`w-6/12 md:w-4/12 lg:w-3/12 xl:w-2/12 p-1`}>
              <li
                className={`border border-${type[0]} rounded-md bg-gradient-to-br from-${type[0]} to-transparent flex flex-col items-center overflow-hidden`}
              >
                <div className="flex justify-between w-full">
                  <p className="text-sm font-bold">
                    {"#" + getThreeDigits(id)}
                  </p>
                  <div className="flex">
                    <img
                      className="h-2/3 m-1"
                      src={addIcon}
                      alt="add Pokemon"
                    />
                    <img
                      className="h-2/3 m-1"
                      src={favoriteIcon}
                      alt="favorite Pokemon"
                    />
                  </div>
                </div>
                <img className="h-avatar" src={picture} alt={name} />
                <h2 className="font-nunito text-body-01 capitalize font-bold">
                  {name}
                </h2>
                <div className="bg-white h-8 w-full space-x-1">
                  <div className="h-full flex content-center">
                    {type.map((poketype, i) => {
                      if (i === 1) {
                        return (
                          <p
                            className={`flex text-subtitle leading-subtitle items-center self-center rounded border border-${poketype}`}
                          >{`${poketype}`}</p>
                        );
                      }
                      return (
                        <p
                          className={`flex text-subtitle self-center leading-subtitle items-center border rounded ml-1 border-${poketype}`}
                        >
                          {poketype}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </li>
            </div>
          );
        })
      )}
    </div>
  );
}

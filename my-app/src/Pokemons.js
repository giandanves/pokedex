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
    <div className="flex flex-wrap mx-auto max-w-fullscreen">
      {pokemons.length === 0 ? (
        <p>
          No Pokemons matches this criterias, change the filters and try again
        </p>
      ) : (
        pokemons.map((pokemon, i) => {
          const { picture, name, id, type } = pokemon;

          return (
            <div
              key={id}
              className={`w-6/12 py-2 pr-4 sm:w-4/12 sm:pr-4 md:w-3/12 md:py-3 md:pr-8 lg:w-2/12`}
            >
              <li
                className={`border border-${type[0]} rounded-md overflow-hidden`}
              >
                <div
                  className={`w-full bg-${type[0]} bg-opacity-20 bg-gradient-to-br from-${type[0]} to-transparent rounded-br-2xl flex flex-col items-center p-3`}
                >
                  <div className="flex justify-between items-center w-full">
                    <p className="text-subtitle font-bold text-black">
                      {"#" + getThreeDigits(id)}
                    </p>
                    <div className="flex">
                      <button>
                        <img className="mx-3" src={addIcon} alt="add Pokemon" />
                      </button>
                      <button>
                        <img src={favoriteIcon} alt="favorite Pokemon" />
                      </button>
                    </div>
                  </div>

                  <img className="p-2" src={picture} alt={name} />
                  <h2 className="font-nunito text-body-03 capitalize font-bold sm:text-body-02 sm:leading-body-02 xl:text-2xl">
                    {name}
                  </h2>
                </div>
                <div className="bg-white w-full py-2">
                  <div className="flex px-2">
                    {type.map((poketype, i) => {
                      return (
                        <p
                          className={`capitalize flex text-subtitle leading-subtitle px-1 mx-1  text-black font-bold   items-center self-center rounded border border-${poketype} lg:py-px`}
                        >{`${poketype}`}</p>
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

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
            <div
              key={id}
              className={`w-6/12  md:w-4/12 lg:w-3/12 xl:w-2/12 p-2`}
            >
              <li
                className={`h-full w-full border border-${type[0]} rounded-md flex flex-col overflow-hidden`}
              >
                <div
                  className={`w-full bg-${type[0]} bg-opacity-20 bg-gradient-to-br from-${type[0]} to-transparent flex flex-col items-center  rounded-br-2xl`}
                >
                  <div className="flex justify-between  w-full px-3 py-2">
                    <p className="text-subtitle font-bold text-black">
                      {"#" + getThreeDigits(id)}
                    </p>
                    <div className="flex">
                      <img className="h mx-3" src={addIcon} alt="add Pokemon" />
                      <img src={favoriteIcon} alt="favorite Pokemon" />
                    </div>
                  </div>

                  <img className="px-5" src={picture} alt={name} />
                  <h2 className="font-nunito text-body-03 capitalize font-bold">
                    {name}
                  </h2>
                </div>
                <div className="bg-white w-full px-2 py-2">
                  <div className="h-full flex content-center">
                    {type.map((poketype, i) => {
                      if (i === 1) {
                        return (
                          <p
                            className={`capitalize flex text-subtitle m-1 text-black font-bold px-1 py-px leading-subtitle items-center self-center rounded border border-${poketype}`}
                          >{`${poketype}`}</p>
                        );
                      }
                      return (
                        <p
                          className={`capitalize flex text-subtitle px-1 py-px text-black font-bold self-center leading-subtitle items-center border rounded border-${poketype}`}
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

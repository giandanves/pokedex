import addIcon from "./img/add-icon.svg";
import favoriteIcon from "./img/favorite-icon.svg";
import getBorderColor from "./getBorderColor";
import getBackground from "./getBackground";
import classNames from "classnames";

export function Pokemons(props) {
  const { pokemons, renderEmpty } = props;

  const getThreeDigits = (n) => {
    if (n < 10) {
      return "00" + n;
    }
    if (n < 100) {
      return "0" + n;
    }
    return n;
  };

  if (pokemons) {
    if (pokemons.length === 0) {
      return <> {renderEmpty()} </>;
    } else
      return (
        <div className="flex flex-wrap -mx-2 max-w-fullscreen min-h-full overflow-auto pr-2">
          {pokemons.map((pokemon, i) => {
            const { picture, name, id, type } = pokemon;
            return (
              <div
                key={id}
                className={`w-6/12 p-2  sm:w-4/12 md:w-3/12 lg:w-2/12`}
              >
                <li
                  className={classNames(
                    "border rounded-md overflow-hidden",
                    getBorderColor(type[0])
                  )}
                >
                  <div
                    className={classNames(
                      getBackground(type[0]),
                      "to-transparent w-full bg-opacity-20 bg-gradient-to-br rounded-br-2xl flex flex-col items-center p-3"
                    )}
                  >
                    <div className="flex justify-between items-center w-full">
                      <p className="text-subtitle font-bold text-black">
                        {"#" + getThreeDigits(id)}
                      </p>
                      <div className="flex">
                        <button>
                          <img
                            className="mx-3"
                            src={addIcon}
                            alt="add Pokemon"
                          />
                        </button>
                        <button>
                          <img src={favoriteIcon} alt="favorite Pokemon" />
                        </button>
                      </div>
                    </div>

                    <div className="aspect-w-1 aspect-h-1 w-full">
                      <img className="p-2" src={picture} alt={name} />
                    </div>
                    <h2 className="font-nunito text-xs capitalize font-bold sm:text-body-02 sm:leading-body-02 xl:text-base">
                      {name}
                    </h2>
                  </div>
                  <div className="bg-white w-full py-2">
                    <div className="flex px-2">
                      {type.map((poketype) => {
                        return (
                          <p
                            className={classNames(
                              "capitalize flex text-subtitle leading-subtitle px-1 mx-1  text-black font-bold items-center self-center rounded border lg:py-px",
                              getBorderColor(poketype)
                            )}
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
          })}
        </div>
      );
  } else {
    return <></>;
  }
}

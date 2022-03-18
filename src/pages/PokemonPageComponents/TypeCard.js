import classNames from "classnames";
import getBorderColor from "../../getBorderColor";
import uniqid from "uniqid";

function TypeCard({ pokemon }) {
  return (
    <div className="py-6">
      <h2 className="pb-2 font-bold text-xs text-black-500">Type</h2>
      <div className="flex">
        {pokemon.types.map((poketype) => {
          return (
            <p
              key={uniqid()}
              className={classNames(
                "capitalize flex text-xs p-2 mr-1  text-black font-bold items-center self-center rounded border",
                getBorderColor(poketype.type.name)
              )}
            >
              {poketype.type.name}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default TypeCard;

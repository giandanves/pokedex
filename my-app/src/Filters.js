import { useContext } from "react";
import { FilterContext } from "./FilterContext";
import filterimg from "./img/filter.svg";
import classNames from "classnames";

export const Filters = () => {
  const { filter, setFilterModalIsOpen } = useContext(FilterContext);
  const height = ["Extra Small", "Small", "Medium", "Tall", "Extra Tall"];
  const weight = ["Extra Light", "Light", "Medium", "Large", "Extra Large"];

  const allSelected = {
    type: filter.type,
    ability: filter.ability,
    move: filter.move,
    height: filter.height.map((h) => height[h - 1]),
    weight: filter.weight.map((w) => weight[w - 1]),
  };

  const list = Object.values(allSelected).flat();

  const getSelected = () => {
    return list.map((e) => {
      return (
        <div
          key={e}
          className="flex mx-1 border border-shade rounded h-8 items-center px-3"
        >
          <p
            key={e}
            className="flex capitalize whitespace-nowrap text-black font-bold text-xs pl-1"
          >
            {e}
          </p>
        </div>
      );
    });
  };

  return (
    <div className="flex w-full py-2 pl-2 overflow-x-auto">
      <button
        className={classNames(
          "flex border border-shade rounded h-8 items-center px-3 bg-white",
          { "bg-lightblue": list.length > 0 }
        )}
        onClick={() => setFilterModalIsOpen(true)}
      >
        <div className="flex h-4 items-center">
          <img src={filterimg} alt="filter" className="h-3" />
        </div>
        <div className="flex">
          <p className="flex text-black font-bold text-xs pl-1">Filters</p>
          {list.length > 0 && (
            <p className="flex ml-1 items-center justify-center bg-primary text-white text-subtitle font-bold px-1 rounded-full h-4 w-4">
              {list.length}
            </p>
          )}
        </div>
      </button>

      <div className="flex overflow-x-auto">{getSelected()}</div>
    </div>
  );
};

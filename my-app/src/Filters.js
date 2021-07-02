import { useContext, useState, useEffect, useCallback, useRef } from "react";
import { FilterContext } from "./FilterContext";
import filterimg from "./img/filter.svg";

export const Filters = () => {
  const { filter, setFilterModalIsOpen } = useContext(FilterContext);
  const [selected, setSelected] = useState([]);
  const selectedFilters = useRef(0);

  const getSelected = useCallback(() => {
    const unique = [...new Set(selected)];
    selectedFilters.current = unique.length;
    return unique.map((e) => {
      return (
        <div
          key={e}
          className="flex mx-1 border border-shade rounded h-8 items-center px-3"
        >
          <p
            key={e}
            className="flex capitalize text-black font-bold text-xs pl-1"
          >
            {e}
          </p>
        </div>
      );
    });
  }, [selected]);

  useEffect(() => {
    const height = ["Extra Small", "Small", "Medium", "Tall", "Extra Tall"];
    const weight = ["Extra Light", "Light", "Medium", "Large", "Extra Large"];

    setSelected([]);

    filter.height.forEach((e) => {
      setSelected((prev) => [...prev, height[e - 1]]);
    });

    filter.weight.forEach((e) => {
      setSelected((prev) => [...prev, weight[e - 1]]);
    });

    filter.type.forEach((e) => {
      setSelected((prev) => [...prev, e]);
    });

    filter.ability.forEach((e) => {
      setSelected((prev) => [...prev, e]);
    });

    filter.move.forEach((e) => {
      setSelected((prev) => [...prev, e]);
    });
  }, [filter]);

  return (
    <div className="flex w-full py-2 pl-2 overflow-x-auto">
      <button
        className={`${
          selected.length > 0 ? "bg-lightblue" : "bg-white"
        } flex border border-shade rounded h-8 items-center px-3`}
        onClick={() => setFilterModalIsOpen(true)}
      >
        <div className="flex h-4 items-center">
          <img src={filterimg} alt="filter" className="h-3" />
        </div>
        <p className="flex text-black font-bold text-xs pl-1">
          Filters
          {selected.length > 0 && (
            <p className="flex ml-1 items-center justify-center bg-primary text-white text-subtitle font-bold px-1 rounded-full h-4 w-4">
              {selectedFilters.current}
            </p>
          )}
        </p>
      </button>

      <div className="flex overflow-x-auto">{getSelected()}</div>
    </div>
  );
};

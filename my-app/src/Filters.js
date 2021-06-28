import { useContext, useState, useEffect, useCallback } from "react";
import { FilterContext } from "./FilterContext";
import filterimg from "./img/filter.svg";
import { Link } from "react-router-dom";

export const Filters = () => {
  const { filter } = useContext(FilterContext);
  const [selected, setSelected] = useState([]);

  const getSelected = useCallback(() => {
    return selected.map((e) => {
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
      <Link
        to="/filters"
        className={`${
          selected.length > 0 ? "bg-lightblue" : "bg-white"
        } flex border border-shade rounded h-8 items-center px-3`}
      >
        <div className="flex h-4 items-center">
          <img src={filterimg} alt="filter" className="h-3" />
        </div>
        <p className="flex text-black font-bold text-xs pl-1">
          Filters
          {selected.length > 0 && (
            <p className="flex ml-1 items-center justify-center bg-primary text-white text-subtitle font-bold px-1 rounded-full h-4 w-4">
              {selected.length}
            </p>
          )}
        </p>
      </Link>

      <div className="flex">{getSelected()}</div>
    </div>
  );
};

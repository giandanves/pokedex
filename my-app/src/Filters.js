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
        <p key={e} className="text-body-03 border m-px">
          {e}
        </p>
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
    <div className="flex">
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
            <p className="ml-1 bg-primary text-white text-subtitle font-bold px-1 rounded-full">
              {selected.length}
            </p>
          )}
        </p>
      </Link>

      <div className="flex">{getSelected()}</div>
    </div>
  );
};

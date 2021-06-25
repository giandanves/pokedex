import { useContext, useState, useEffect, useCallback } from "react";
import { FilterContext } from "./FilterContext";

export const SelectedFilters = (props) => {
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

  return <div className="flex">{getSelected()}</div>;
};

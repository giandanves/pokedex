import { FilterContext } from "./FilterContext";
import { useContext } from "react";

const Button = (props) => {
  const { label, text, bg, type, onClickFunction } = props;
  return (
    <button
      type={type}
      className={`text-${text} bg-${bg} font-bold text-sm py-3 px-4 rounded`}
      onClick={() => onClickFunction()}
    >
      {label}
    </button>
  );
};

const FilterFooter = () => {
  const { setOffset, setFilter } = useContext(FilterContext);
  const resetFilters = () => {
    setFilter({
      height: [],
      weight: [],
      type: [],
      ability: [],
      move: [],
      search: "",
    });
    setOffset(0);
  };

  const submitClick = () => {
    return;
  };
  return (
    <div className="flex flex-col w-full h-navbarmodal bg-white items-end">
      <div className="flex h-full items-center px-4">
        <Button
          label={"Clear Filters"}
          text={"primary"}
          bg={"white"}
          type={"reset"}
          onClickFunction={resetFilters}
        />
        <Button
          label={"Show Results"}
          text={"white"}
          bg={"primary"}
          type={"submit"}
          onClickFunction={submitClick}
        />
      </div>
    </div>
  );
};

export default FilterFooter;

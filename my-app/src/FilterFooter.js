import { FilterContext } from "./FilterContext";
import { useContext } from "react";

const FilterFooter = () => {
  let { setOffset, setFilter } = useContext(FilterContext);

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

  return (
    <div className="flex flex-col w-full h-navbarmodal bg-white items-end">
      <div className="flex h-full items-center px-4">
        <button
          className=" font-bold text-sm text-primary py-3 px-4 rounded"
          type="reset"
          onClick={() => resetFilters()}
        >
          Clear Filters
        </button>
        <button
          type="submit"
          className="bg-primary font-bold text-sm ml-1 text-white py-3 px-4 rounded"
        >
          Show Results
        </button>
      </div>
    </div>
  );
};

export default FilterFooter;

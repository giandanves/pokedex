import { useContext } from "react";
import { FilterContext } from "../FilterContext";

const Header = () => {
  const { filter, setFilter } = useContext(FilterContext);

  return (
    <div className="pb-3 md:flex justify-between px-2 pt-2">
      <h1 className=" text-2xl font-nunito font-bold pb-3 lg: pt-2">Pokedex</h1>
      <div className="w-full md:max-w-1/3 border border-gray rounded pl-2 pr-4">
        <input
          name="search"
          className="text-body-02 w-full h-12 px-2 bg-search bg-no-repeat bg-right"
          type="text"
          onChange={(e) =>
            setFilter({ ...filter, search: e.target.value.toLowerCase() })
          }
          placeholder={"Search..."}
        />
        {filter.search.length < 3 && filter.search.length > 0 && (
          <p className="text-danger text-xs">
            {"Type at least 2 characters to search"}
          </p>
        )}
      </div>
    </div>
  );
};

export default Header;

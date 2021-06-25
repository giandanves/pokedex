import { PaginationController } from "./PaginationController";
import { Pokemons } from "./Pokemons";
import { getUrl } from "./getUrl";
import { SelectedFilters } from "./SelectedFilters";
import { useContext, useEffect } from "react";
import { handleLoadAndError } from "./HandleLoadAndError";
import { useQuery } from "react-query";
import { FilterContext } from "./FilterContext";
import { Link } from "react-router-dom";
import { debounce } from "lodash";
const defaultUrl = process.env.REACT_APP_DEFAULT_URL;

function App() {
  const { url, setUrl, filter, setFilter, limit, setLimit, offset, setOffset } =
    useContext(FilterContext);
  const getLimit = () => {
    return `&limit=${limit}`;
  };

  const getOffset = () => {
    return `&offset=${offset}`;
  };

  //check this please!
  const handleUrl = debounce(() => {
    setUrl(getUrl(filter, defaultUrl));
  }, 300);

  useEffect(() => {
    if (filter.search.length > 2 || filter.search.length === 0) {
      handleUrl();
    }
  }, [filter, handleUrl]);

  //thanks

  const {
    isLoading,
    error,
    data: pokemons,
    refetch,
  } = useQuery(`${url}${getLimit()}${getOffset()}`, { retryDelay: 1000 });

  return (
    <div className="pl-4 lg:pl-10">
      <h1 className=" text-heading font-nunito font-bold  mt-6 mb-4">
        Pokedex
      </h1>
      <div>
        <input
          name="search"
          className="text-body-02 border border-gray rounded w-full h-12"
          type="text"
          onChange={(e) => setFilter({ ...filter, search: e.target.value })}
          placeholder={"   Search..."}
        />
        {filter.search.length < 3 && filter.search.length > 0 && (
          <p className="text-danger text-xs">
            {"Type at least 2 characters to search"}
          </p>
        )}
      </div>
      <div className="flex">
        <Link to="/filters">
          <button className="font-nunito">Filters</button>
        </Link>

        <SelectedFilters />
      </div>

      <PaginationController
        limit={limit}
        setLimit={setLimit}
        setOffset={setOffset}
        offset={offset}
        loading={isLoading}
        count={pokemons?.count}
      />
      <>
        {handleLoadAndError(isLoading, error) || (
          <Pokemons pokemons={pokemons.results} />
        )}
        {error ? <button onClick={() => refetch()}>Try Again</button> : <></>}
      </>
    </div>
  );
}

export default App;

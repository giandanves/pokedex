import { PaginationController } from "./PaginationController";
import { Pokemons } from "./Pokemons";
import { getUrl } from "./getUrl";
import { useContext, useEffect } from "react";
import { handleLoadAndError } from "./HandleLoadAndError";
import { useQuery } from "react-query";
import { FilterContext } from "./FilterContext";
import { Link } from "react-router-dom";
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

  useEffect(() => {
    if (filter.search.length > 2 || filter.search.length === 0) {
      setUrl(getUrl(filter, defaultUrl));
    }
  }, [filter, setUrl]);

  const {
    isLoading,
    error,
    data: pokemons,
    refetch,
  } = useQuery(`${url}${getLimit()}${getOffset()}`, { retryDelay: 1000 });

  return (
    <div>
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
      </div>
      <Link to="/filters">
        <button className="font-nunito">Filters</button>
      </Link>

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

import { PaginationController } from "./PaginationController";
import { Navbar } from "./Navbar";
import { NavbarMobile } from "./NavbarMobile";
import { Pokemons } from "./Pokemons";
import { TeamsPage } from "./TeamsPage";
import { FavoritesPage } from "./FavoritesPage";
import { getUrl } from "./getUrl";
import { Filters } from "./Filters";
import { useContext, useEffect } from "react";
import { handleLoadAndError } from "./HandleLoadAndError";
import { useQuery } from "react-query";
import { FilterContext } from "./FilterContext";
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
    <>
      <Navbar />
      <div className="px-6 pt-6 h-full md:pl-4 lg:pl-10 lg:pt-8 max-w-fullscreen">
        <div className="pb-3 md:flex justify-between lg:pr-10">
          <h1 className=" text-2xl font-nunito font-bold pb-3 lg: pt-2">
            Pokedex
          </h1>
          <input
            name="search"
            className="text-body-02 border border-gray rounded w-full md:max-w-searchbar h-12"
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
        <Filters />

        <PaginationController
          limit={limit}
          setLimit={setLimit}
          setOffset={setOffset}
          offset={offset}
          loading={isLoading}
          count={pokemons?.count}
        />
        <>
          <TeamsPage />
          <FavoritesPage />
          {handleLoadAndError(isLoading, error) || (
            <Pokemons pokemons={pokemons.results} />
          )}
          {error ? <button onClick={() => refetch()}>Try Again</button> : <></>}
        </>
      </div>
      <NavbarMobile />
    </>
  );
}

export default App;

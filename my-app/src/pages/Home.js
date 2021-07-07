import { PaginationController } from "../components/PaginationController";
import { Pokemons } from "../Pokemons";
import Header from "../components/Header";
import Error from "../error";
import Loading from "../loading";
import ResourceState from "../ResourceState";
import { Filters } from "../components/Filters";
import { FilterModal } from "../modal/FilterModal";
import { getUrl } from "../getUrl";
import { useContext, useEffect } from "react";
import { useQuery } from "react-query";
import { FilterContext } from "../FilterContext";
import { debounce } from "lodash";
const defaultUrl = process.env.REACT_APP_DEFAULT_URL;

function Home() {
  const { url, setUrl, filter, limit, setLimit, offset, setOffset } =
    useContext(FilterContext);
  const getLimit = () => {
    return `&limit=${limit}`;
  };

  const getOffset = () => {
    return `&offset=${offset}`;
  };

  const handleUrl = debounce(() => {
    setUrl(getUrl(filter, defaultUrl));
  }, 300);

  useEffect(() => {
    if (filter.search.length > 2 || filter.search.length === 0) {
      handleUrl();
    }
  }, [filter, handleUrl]);

  const {
    isLoading,
    error,
    data: pokemons,
    refetch,
  } = useQuery(`${url}${getLimit()}${getOffset()}`, {
    retryDelay: 1000,
  });

  return (
    <>
      <div className="mx-auto h-full p-8 max-w-fullscreen">
        <Header />
        <Filters />
        <>
          <FilterModal />
          <ResourceState
            loading={isLoading}
            renderLoading={() => <Loading />}
            error={error}
            renderError={() => <Error />}
            render={() => <Pokemons pokemons={pokemons.results} />}
          />
        </>
      </div>
      <PaginationController
        limit={limit}
        setLimit={setLimit}
        setOffset={setOffset}
        offset={offset}
        loading={isLoading}
        count={pokemons?.count}
      />
    </>
  );
}

export default Home;

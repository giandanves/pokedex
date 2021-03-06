import { PaginationController } from "../components/PaginationController";
import { Pokemons } from "../Pokemons";
import Header from "../components/Header";
import Error from "../error";
import Loading from "../loading";
import Empty from "../empty";
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
    retry: false,
  });

  return (
    <>
      <div className="mx-auto min-h-4/5 px-8 pt-8 pb-4 max-w-fullscreen w-full">
        <Header />
        <Filters />
        <>
          <FilterModal />
          <ResourceState
            loading={isLoading}
            renderLoading={() => <Loading />}
            error={error}
            message={pokemons?.message}
            pokemons={pokemons?.results}
            renderDigivirusState={() => (
              <Error
                error={"XXX"}
                refetch={refetch}
                message={pokemons?.message}
                renderDigimons={() => <Pokemons pokemons={pokemons.results} />}
              />
            )}
            renderError={() => <Error error={error} refetch={refetch} />}
            render={() => (
              <Pokemons
                pokemons={pokemons.results}
                renderEmpty={() => <Empty />}
              />
            )}
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

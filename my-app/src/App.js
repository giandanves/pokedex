import { PaginationController } from "./PaginationController";
import { Pokemons } from "./Pokemons";
import { useContext } from "react";
import { handleLoadAndError } from "./HandleLoadAndError";
import { useQuery } from "react-query";
import { Context } from "./Context";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  const { url, limit, setLimit, offset, setOffset } = useContext(Context);
  const getLimit = () => {
    return `&limit=${limit}`;
  };

  const getOffset = () => {
    return `&offset=${offset}`;
  };

  const {
    isLoading,
    error,
    data: pokemons,
    refetch,
  } = useQuery(`${url}${getLimit()}${getOffset()}`, { retryDelay: 1000 });

  return (
    <>
      <button onClick={() => history.push("/filters")}>Filters</button>

      <PaginationController
        limit={limit}
        setLimit={setLimit}
        setOffset={setOffset}
        offset={offset}
        loading={isLoading}
        count={pokemons?.count}
      />
      <ul>
        {handleLoadAndError(isLoading, error) || (
          <Pokemons pokemons={pokemons.results} />
        )}
        {error ? <button onClick={() => refetch()}>Try Again</button> : <></>}
      </ul>
    </>
  );
}

export default App;

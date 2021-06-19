import { handleLoadAndError } from "./HandleLoadAndError";
import { useState } from "react";
import { useQuery } from "react-query";
import { Field } from "formik";

export const Moves = (props) => {
  const { filter } = props;
  const movesUrl = process.env.REACT_APP_POKETYPES_MOVE_URL;
  const moves = useQuery(movesUrl, { retryDelay: 1000 });
  const [movesFilter, setMovesFilter] = useState("");

  moves.data?.results.sort(function (a) {
    let sorter = 0;
    if (
      filter.move.map((e) => {
        if (e === a.name) {
          sorter = -1;
        }
        return sorter;
      })
    ) {
      return sorter;
    }

    return 0;
  });

  const getMoves = () => {
    return (
      <section className="ability-container">
        {moves.data.results.map((move) => {
          return (
            <>
              {move.name.startsWith(movesFilter) && (
                <label>
                  <Field
                    type="checkbox"
                    name="move"
                    key={move}
                    value={move.name}
                  />
                  {move.name}
                </label>
              )}
            </>
          );
        })}
      </section>
    );
  };

  return (
    <>
      <div>
        <p>Moves</p>
        <Field
          name="searchMove"
          type="text"
          placeholder="Search move"
          onChange={(e) => setMovesFilter(e.target.value)}
        />

        {handleLoadAndError(moves.isLoading, moves.isError) || getMoves()}
      </div>
      {moves.isError && (
        <button onClick={() => moves.Refetch()}>Try Again</button>
      )}
    </>
  );
};

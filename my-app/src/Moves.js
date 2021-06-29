import { handleLoadAndError } from "./HandleLoadAndError";
import { useState } from "react";
import { useQuery } from "react-query";
import { Field, useFormikContext } from "formik";

export const Moves = (props) => {
  const { filter } = props;
  const { values } = useFormikContext();
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
      <section className="ability-container flex flex-wrap border border-gray rounded p-px">
        {moves.data.results.map((move) => {
          return (
            <>
              {move.name.startsWith(movesFilter) && (
                <label
                  className={`bg-${
                    values.move.includes(move.name.toString()) && "lightblue"
                  } capitalize h-6 px-2 mr-2 mb-2 py-1  text-black font-bold text-subtitle leading-subtitle border border-black-300 rounded`}
                >
                  <Field
                    type="checkbox"
                    name="move"
                    className="hidden"
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
      <div className="pb-6">
        <p className="pb-4 pt-6 text-base font-bold text-black">Moves</p>
        <Field
          name="searchMove"
          type="text"
          placeholder="Search..."
          className="text-sm border h-12 w-full pl-4 border-gray rounded-lg mb-6"
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

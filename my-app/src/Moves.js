import { handleLoadAndError } from "./HandleLoadAndError";
import { useQuery } from "react-query";
import { Field, useFormikContext } from "formik";
import Checkbox from "./Checkbox";
import { useState } from "react";

export const Moves = (props) => {
  const { filter } = props;
  const { values } = useFormikContext();
  const movesUrl = process.env.REACT_APP_POKETYPES_MOVE_URL;
  const moves = useQuery(movesUrl, { retryDelay: 1000 });
  const [movesSearch, setMovesSearch] = useState("");

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
            move.name.startsWith(movesSearch) && (
              <Checkbox
                label={move.name}
                name="move"
                value={move.name}
                values={values.move}
              />
            )
          );
        })}
      </section>
    );
  };

  return (
    <>
      <div>
        <p className="pb-4 pt-6 text-base font-bold text-black">Moves</p>
        <Field
          name="searchMove"
          type="text"
          placeholder="Search..."
          className="text-sm border h-12 w-full pl-4 border-gray rounded-lg mb-6"
          onChange={(e) => setMovesSearch(e.target.value)}
        />

        {handleLoadAndError(moves.isLoading, moves.error, moves.refetch) ||
          getMoves()}
      </div>
    </>
  );
};

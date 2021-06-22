import { handleLoadAndError } from "./HandleLoadAndError";
import { useState } from "react";
import { useQuery } from "react-query";
import { Field } from "formik";

export const Abilities = (props) => {
  const { filter } = props;
  const abilitiesUrl = process.env.REACT_APP_POKETYPES_ABILITY_URL;
  const abilities = useQuery(abilitiesUrl, { retryDelay: 1000 });
  const [abilityFilter, setAbilityFilter] = useState("");

  abilities.data?.results.sort(function (a) {
    let sorter = 0;
    if (
      filter.ability.map((e) => {
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

  const getAbilities = () => {
    return (
      <section className="ability-container">
        {abilities.data.results.map((ability) => {
          return (
            <>
              {ability.name.startsWith(abilityFilter) && (
                <label>
                  <Field
                    type="checkbox"
                    name="ability"
                    key={ability}
                    value={ability.name}
                  />
                  {ability.name}
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
        <p>Abilities</p>
        <Field
          name="searchAbility"
          type="text"
          placeholder="Search ability"
          onChange={(e) => setAbilityFilter(e.target.value)}
        />

        {handleLoadAndError(abilities.isLoading, abilities.isError) ||
          getAbilities()}
      </div>
      {abilities.isError && (
        <button onClick={() => abilities.Refetch()}>Try Again</button>
      )}
    </>
  );
};

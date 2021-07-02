import { handleLoadAndError } from "./HandleLoadAndError";
import { useState } from "react";
import { useQuery } from "react-query";
import { Field, useFormikContext } from "formik";

export const Abilities = (props) => {
  const { filter } = props;
  const { values } = useFormikContext();
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
      <section className="ability-container flex flex-wrap border border-gray rounded p-px">
        {abilities.data.results.map((ability) => {
          return (
            <>
              {ability.name.startsWith(abilityFilter) && (
                <label
                  className={`bg-${
                    values.ability.includes(ability.name.toString()) &&
                    "lightblue"
                  } capitalize h-6 py-1 px-2 mr-2 mb-2  text-black font-bold text-subtitle leading-subtitle border border-black-300 rounded`}
                >
                  <Field
                    type="checkbox"
                    name="ability"
                    key={ability}
                    className="hidden"
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
      <div className="mb-4">
        <p className="pb-4 pt-6 text-base font-bold text-black">Abilities</p>
        <Field
          name="searchAbility"
          type="text"
          placeholder="Search..."
          className="text-sm border h-12 w-full pl-4 border-gray rounded-lg mb-6"
          onChange={(e) => setAbilityFilter(e.target.value)}
        />

        {handleLoadAndError(abilities.isLoading, abilities.error) ||
          getAbilities()}
      </div>
      {abilities.isError && (
        <button onClick={() => abilities.refetch()}>Try Again</button>
      )}
    </>
  );
};

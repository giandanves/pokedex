import { getUrl } from "./getUrl";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useQuery } from "react-query";
import { handleLoadAndError } from "./HandleLoadAndError";
import { Context } from "./Context";
import { useContext, useState } from "react";
const poketypesUrl = process.env.REACT_APP_POKETYPES_URL;
const defaultUrl = process.env.REACT_APP_DEFAULT_URL;
const abilitiesUrl = process.env.REACT_APP_POKETYPES_ABILITY_URL;
const movesUrl = process.env.REACT_APP_POKETYPES_MOVE_URL;

export const FilterPage = () => {
  const history = useHistory();
  let { url, setUrl, setOffset } = useContext(Context);
  const [abilityFilter, setAbilityFilter] = useState("");
  const [movesFilter, setMovesFilter] = useState("");

  const {
    isLoading: typelistIsLoading,
    isError: typelistHaserror,
    data: typelistData,
    refetch: refetchTypelist,
  } = useQuery(poketypesUrl, { retryDelay: 1000 });

  const {
    isLoading: abilitiesIsLoading,
    isError: abilitiesHaserror,
    data: abilitiesData,
    refetch: refetchAbilities,
  } = useQuery(abilitiesUrl, { retryDelay: 1000 });

  const {
    isLoading: movesIsLoading,
    isError: movesHaserror,
    data: movesData,
    refetch: refetchMoves,
  } = useQuery(movesUrl, { retryDelay: 1000 });

  const onSubmit = (values) => {
    setOffset(0);
    url = defaultUrl;
    const filteredUrl = getUrl(values, url);
    setUrl(filteredUrl);
    history.push("/");
  };

  const resetUrl = () => {
    setUrl(defaultUrl);
    setOffset(0);
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={{
        height: [],
        weight: [],
        search: "",
        type: [],
        ability: [],
        move: [],
      }}
    >
      <Form>
        <button onClick={() => history.push("/")}>Back</button>
        <button type="reset" onClick={resetUrl}>
          Reset
        </button>
        <button type="submit">Apply</button>
        <div>
          <Field name="search" type="text" placeholder="Search by name" />
        </div>
        <div>
          <p>Height</p>
          <label>
            <Field type="checkbox" name="height" value="1" />1
          </label>

          <label>
            <Field type="checkbox" name="height" value="2" />2
          </label>

          <label>
            <Field type="checkbox" name="height" value="3" />3
          </label>

          <label>
            <Field type="checkbox" name="height" value="4" />4
          </label>

          <label>
            <Field type="checkbox" name="height" value="5" />5
          </label>
        </div>
        <div>
          <p>Weight</p>
          <label>
            <Field type="checkbox" name="weight" value="1" />1
          </label>

          <label>
            <Field type="checkbox" name="weight" value="2" />2
          </label>

          <label>
            <Field type="checkbox" name="weight" value="3" />3
          </label>

          <label>
            <Field type="checkbox" name="weight" value="4" />4
          </label>

          <label>
            <Field type="checkbox" name="weight" value="5" />5
          </label>
        </div>

        <div>
          <p>Types</p>
          {handleLoadAndError(typelistIsLoading, typelistHaserror) ||
            typelistData.results.map((pokeType) => {
              return (
                <>
                  <label>
                    <Field type="checkbox" name="type" value={pokeType.name} />
                    {pokeType.name}
                  </label>
                </>
              );
            })}
        </div>
        {typelistHaserror ? (
          <button onClick={() => refetchTypelist()}>Try Again</button>
        ) : (
          <></>
        )}

        <div>
          <p>Moves</p>
          <Field
            name="searchMove"
            type="text"
            placeholder="Search move"
            onChange={(e) => setMovesFilter(e.target.value)}
          />

          {handleLoadAndError(movesIsLoading, movesHaserror) || (
            <section className="ability-container">
              {movesData.results.map((move) => {
                return (
                  <>
                    {move.name.startsWith(movesFilter) && (
                      <label>
                        <Field type="checkbox" name="move" value={move.name} />
                        {move.name}
                      </label>
                    )}
                  </>
                );
              })}
            </section>
          )}
        </div>
        {movesHaserror ? (
          <button onClick={() => refetchMoves()}>Try Again</button>
        ) : (
          <></>
        )}

        <div>
          <p>Abilities</p>
          <Field
            name="searchAbility"
            type="text"
            placeholder="Search ability"
            onChange={(e) => setAbilityFilter(e.target.value)}
          />

          {handleLoadAndError(abilitiesIsLoading, abilitiesHaserror) || (
            <section className="ability-container">
              {abilitiesData.results.map((ability) => {
                return (
                  <>
                    {ability.name.startsWith(abilityFilter) && (
                      <label>
                        <Field
                          type="checkbox"
                          name="ability"
                          value={ability.name}
                        />
                        {ability.name}
                      </label>
                    )}
                  </>
                );
              })}
            </section>
          )}
        </div>
        {abilitiesHaserror ? (
          <button onClick={() => refetchAbilities()}>Try Again</button>
        ) : (
          <></>
        )}
      </Form>
    </Formik>
  );
};

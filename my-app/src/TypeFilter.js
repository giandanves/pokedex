import { handleLoadAndError } from "./HandleLoadAndError";
import { Field } from "formik";
import { useQuery } from "react-query";
export const Type = () => {
  const poketypesUrl = process.env.REACT_APP_POKETYPES_URL;
  const types = useQuery(poketypesUrl, { retryDelay: 1000 });
  return (
    <>
      <div>
        <p>Types</p>
        {handleLoadAndError(types.isLoading, types.isError) ||
          types.data.results.map((pokeType) => {
            return (
              <>
                <label className="capitalize">
                  <Field type="checkbox" name="type" value={pokeType.name} />
                  {pokeType.name}
                </label>
              </>
            );
          })}
      </div>
      {types.isError && (
        <button onClick={() => types.refetch()}>Try Again</button>
      )}
    </>
  );
};

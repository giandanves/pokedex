import { handleLoadAndError } from "./HandleLoadAndError";
import { Field, useFormikContext } from "formik";
import { useQuery } from "react-query";
export const Type = () => {
  const { values } = useFormikContext();
  const poketypesUrl = process.env.REACT_APP_POKETYPES_URL;
  const types = useQuery(poketypesUrl, { retryDelay: 1000 });
  return (
    <>
      <div className="pt-6 pb-4 w-full">
        <p className="pb-4 text-base font-bold text-black">Type</p>
        {handleLoadAndError(types.isLoading, types.isError) || (
          <div className="flex flex-wrap">
            {types.data.results.map((pokeType) => {
              return (
                <>
                  <label
                    className={`bg-${
                      values.type.includes(pokeType.name.toString()) &&
                      "lightblue"
                    } capitalize py-2 px-2 mr-2 mb-2  text-black font-bold text-subtitle leading-subtitle border border-black-300 rounded`}
                  >
                    <Field
                      type="checkbox"
                      name="type"
                      value={pokeType.name}
                      className="hidden"
                    />
                    {pokeType.name}
                  </label>
                </>
              );
            })}
          </div>
        )}
      </div>
      {types.isError && (
        <button onClick={() => types.refetch()}>Try Again</button>
      )}
    </>
  );
};

import { handleLoadAndError } from "./HandleLoadAndError";
import { Field, useFormikContext } from "formik";
import checkedImg from "./img/checked.svg";
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
                    className={`flex bg-${
                      values.type.includes(pokeType.name) &&
                      "lightblue border-primary"
                    } capitalize py-2 px-2 mr-2 mb-2  text-black font-bold text-subtitle leading-subtitle border border-black-300 rounded`}
                  >
                    <img
                      src={checkedImg}
                      alt="checked"
                      className={`opacity-0 ${
                        values.type.includes(pokeType.name) && "opacity-100"
                      }`}
                    />

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

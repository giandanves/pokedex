import { handleLoadAndError } from "./HandleLoadAndError";
import { useFormikContext } from "formik";
import { useQuery } from "react-query";
import Checkbox from "./Checkbox";

export const Type = () => {
  const { values } = useFormikContext();
  const poketypesUrl = process.env.REACT_APP_POKETYPES_URL;
  const types = useQuery(poketypesUrl, { retryDelay: 1000 });
  return (
    <>
      <div className="pt-6 pb-4 w-full">
        <p className="pb-4 text-base font-bold text-black">Type</p>
        {handleLoadAndError(types.isLoading, types.isError, types.refetch) || (
          <div className="flex flex-wrap">
            {types.data.results.map((pokeType) => {
              return (
                <Checkbox
                  label={pokeType.name}
                  name="type"
                  value={pokeType.name}
                  values={values.type}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

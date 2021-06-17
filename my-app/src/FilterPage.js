import { getUrl } from "./getUrl";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useQuery } from "react-query";
import { handleLoadAndError } from "./HandleLoadAndError";
import { Context } from "./Context";
import { useContext } from "react";
const poketypesUrl = process.env.REACT_APP_POKETYPES_URL;
const defaultUrl = process.env.REACT_APP_DEFAULT_URL;

export const FilterPage = () => {
  const history = useHistory();
  let { url, setUrl, setOffset } = useContext(Context);

  const {
    isLoading: typelistIsLoading,
    isError: typelistHaserror,
    data: typelistData,
    refetch: refetchTypelist,
  } = useQuery(poketypesUrl, { retryDelay: 1000 });

  const onSubmit = (values) => {
    console.dir(values);
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
      }}
    >
      <Form>
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
        <button type="reset" onClick={resetUrl}>
          Clear filters
        </button>
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

import { useFetch } from "./useFetch";
import { useState } from "react";
import { Pokemons } from "./Pokemons";
import { handleLoadAndError } from "./HandleLoadAndError";
import { PaginationController } from "./PaginationController";
import { getUrl } from "./getUrl";
import { Formik, Form, Field } from "formik";
const defaultUrl = process.env.REACT_APP_DEFAULT_URL;
const poketypesUrl = process.env.REACT_APP_POKETYPES_URL;

function App() {
  let [url, setUrl] = useState(defaultUrl);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  const getLimit = () => {
    return `&limit=${limit}`;
  };

  const getOffset = () => {
    return `&offset=${offset}`;
  };
  const [loading, pokemons, error, refetchData] = useFetch(
    url + getLimit() + getOffset()
  );
  const typeList = useFetch(poketypesUrl);
  const [typeIsLoading, typeResult, typeHasError, refetchTypes] = typeList;

  const newFetch = (e) => {
    e.preventDefault();
    refetchData();
  };

  const refetchTypeList = (e) => {
    e.preventDefault();
    refetchTypes();
  };

  const onSubmit = (values) => {
    setOffset(0);
    url = defaultUrl;
    const filteredUrl = getUrl(values, url);
    setUrl(filteredUrl);
    console.log(values);
  };

  return (
    <>
      <Formik
        onSubmit={onSubmit}
        initialValues={{
          heights: [],
          weights: [],
          search: "",
          type: [],
        }}
      >
        <Form>
          <div>
            <Field name="search" type="text" placeholder="Search by name" />
            <button type="submit">Search</button>
          </div>
          <div>
            <p>Height</p>
            <label>
              <Field type="checkbox" name="heights" value="1" />1
            </label>

            <label>
              <Field type="checkbox" name="heights" value="2" />2
            </label>

            <label>
              <Field type="checkbox" name="heights" value="3" />3
            </label>

            <label>
              <Field type="checkbox" name="heights" value="4" />4
            </label>

            <label>
              <Field type="checkbox" name="heights" value="5" />5
            </label>
          </div>
          <div>
            <p>Weight</p>
            <label>
              <Field type="checkbox" name="weights" value="1" />1
            </label>

            <label>
              <Field type="checkbox" name="weights" value="2" />2
            </label>

            <label>
              <Field type="checkbox" name="weights" value="3" />3
            </label>

            <label>
              <Field type="checkbox" name="weights" value="4" />4
            </label>

            <label>
              <Field type="checkbox" name="weights" value="5" />5
            </label>
          </div>

          <div>
            <p>Types</p>
            {handleLoadAndError(typeIsLoading, typeHasError) ||
              typeResult.results.map((pokeType) => {
                return (
                  <>
                    <label>
                      <Field
                        type="checkbox"
                        name="type"
                        value={pokeType.name}
                      />
                      {pokeType.name}
                    </label>
                  </>
                );
              })}
          </div>
          {error ? (
            <button onClick={(e) => refetchTypeList(e)}>Try Again</button>
          ) : (
            <></>
          )}
          <button type="reset">Clear filters</button>
          <PaginationController
            limit={limit}
            setLimit={setLimit}
            setOffset={setOffset}
            offset={offset}
            loading={loading}
          />
        </Form>
      </Formik>
      <ul>
        {handleLoadAndError(loading, error) || <Pokemons pokemons={pokemons} />}
        {error ? (
          <button onClick={(e) => newFetch(e)}>Try Again</button>
        ) : (
          <></>
        )}
      </ul>
    </>
  );
}

export default App;

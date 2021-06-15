import { useState } from "react";
import { Pokemons } from "./Pokemons";
import { handleLoadAndError } from "./HandleLoadAndError";
import { PaginationController } from "./PaginationController";
import { getUrl } from "./getUrl";
import { Formik, Form, Field } from "formik";
import { useQuery } from "react-query";
const defaultUrl = process.env.REACT_APP_DEFAULT_URL;
const poketypesUrl = process.env.REACT_APP_POKETYPES_URL;

function App() {
  let [url, setUrl] = useState(defaultUrl);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const { isLoading, error, data, refetch } = useQuery(
    [url, limit, offset],
    () => fetch(url + getLimit() + getOffset()).then((res) => res.json())
  );

  const getLimit = () => {
    return `&limit=${limit}`;
  };

  const getOffset = () => {
    return `&offset=${offset}`;
  };

  const typeList = useQuery(poketypesUrl, () =>
    fetch(poketypesUrl).then((res) => res.json())
  );

  const onSubmit = (values) => {
    setOffset(0);
    url = defaultUrl;
    const filteredUrl = getUrl(values, url);
    setUrl(filteredUrl);
  };

  const resetUrl = () => {
    setUrl(defaultUrl);
    setOffset(0);
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
            {handleLoadAndError(typeList.isLoading, typeList.error) ||
              typeList.data.results.map((pokeType) => {
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
            <button onClick={() => typeList.refetch()}>Try Again</button>
          ) : (
            <></>
          )}
          <button type="reset" onClick={resetUrl}>
            Clear filters
          </button>
          <PaginationController
            limit={limit}
            setLimit={setLimit}
            setOffset={setOffset}
            offset={offset}
            loading={isLoading}
          />
        </Form>
      </Formik>
      <ul>
        {handleLoadAndError(isLoading, error) || <Pokemons pokemons={data} />}
        {error ? <button onClick={() => refetch()}>Try Again</button> : <></>}
      </ul>
    </>
  );
}

export default App;

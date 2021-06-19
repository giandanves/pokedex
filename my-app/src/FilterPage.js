import { getUrl } from "./getUrl";
import { useHistory, Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Type } from "./TypeFilter";
import { Moves } from "./Moves";
import { Weight } from "./Weight";
import { Height } from "./Height";
import { Abilities } from "./Abilities";
import { FilterContext } from "./FilterContext";
import { useContext, useEffect, useState } from "react";
const defaultUrl = process.env.REACT_APP_DEFAULT_URL;

export const FilterPage = () => {
  const history = useHistory();
  let { url, setUrl, setOffset, filter, setFilter } = useContext(FilterContext);
  const [filteredUrl, setFilteredUrl] = useState(url);

  useEffect(() => {
    setUrl(filteredUrl);
  }, [setUrl, filteredUrl]);

  const onSubmit = (values) => {
    setOffset(0);
    setFilter((prev) => (prev = values));
    setFilteredUrl(getUrl(values, defaultUrl));
    history.push("/");
  };

  const resetFilters = (values) => {
    console.dir(values);
    setUrl(defaultUrl);
    setFilter({
      height: [],
      weight: [],
      search: "",
      type: [],
      ability: [],
      move: [],
    });

    setOffset(0);
  };

  return (
    <Formik
      enableReinitialize={true}
      onSubmit={onSubmit}
      initialValues={filter}
    >
      <Form>
        <Link to="/">
          <button>Back</button>
        </Link>
        <button type="reset" onClick={resetFilters}>
          Reset
        </button>
        <button type="submit">Apply</button>
        <div>
          <Field
            name="search"
            type="text"
            placeholder="Search by name (min. 3 characteres)"
          />
        </div>
        <Height />
        <Weight />

        <Type />
        <Moves filter={filter} />
        <Abilities filter={filter} />
      </Form>
    </Formik>
  );
};

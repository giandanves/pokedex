import { useHistory, Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { Type } from "./TypeFilter";
import { Moves } from "./Moves";
import { Weight } from "./Weight";
import { Height } from "./Height";
import { Abilities } from "./Abilities";
import { FilterContext } from "./FilterContext";
import { useContext } from "react";

export const FilterPage = () => {
  const history = useHistory();
  let { setOffset, filter, setFilter } = useContext(FilterContext);

  const onSubmit = (values) => {
    setOffset(0);
    setFilter((prev) => (prev = values));
    history.push("/");
  };

  const resetFilters = () => {
    setFilter({
      height: [],
      weight: [],
      type: [],
      ability: [],
      move: [],
      search: "",
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

        <Height />
        <Weight />

        <Type />
        <Moves filter={filter} />
        <Abilities filter={filter} />
      </Form>
    </Formik>
  );
};

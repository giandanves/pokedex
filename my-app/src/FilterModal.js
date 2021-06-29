import { Formik, Form } from "formik";
import { Type } from "./TypeFilter";
import { Moves } from "./Moves";
import { Weight } from "./Weight";
import { Height } from "./Height";
import { Abilities } from "./Abilities";
import { FilterContext } from "./FilterContext";
import { useContext } from "react";
import ReactModal from "react-modal";

export const FilterModal = () => {
  let {
    setOffset,
    filter,
    setFilter,
    filterModalIsOpen,
    setFilterModalIsOpen,
  } = useContext(FilterContext);

  const onSubmit = (values) => {
    setOffset(0);
    setFilter((prev) => (prev = values));
    setFilterModalIsOpen(false);
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
    <ReactModal
      isOpen={filterModalIsOpen}
      bodyOpenClassName="body-open"
      style={{
        overlay: {
          maxWidth: "1440px",
          backgroundColor: "#2B314060",
        },
        content: {
          padding: "20px 32px 0px 32px",
          opacity: "1",
          backgroundColor: "white",
          height: "100%",
          width: "100%",
          maxWidth: "666px",
          maxHeight: "720px",
          margin: "auto",
          border: "1px solid #EDEEF8",
          borderRadius: "8px",
        },
      }}
    >
      <div className="h-full w-full bg-white bg-opacity-1">
        <p>Filters</p>
        <Formik
          enableReinitialize={true}
          onSubmit={onSubmit}
          initialValues={filter}
        >
          <Form>
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
      </div>
    </ReactModal>
  );
};

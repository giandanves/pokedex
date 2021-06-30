import { Formik, Form } from "formik";
import { Type } from "./TypeFilter";
import { Moves } from "./Moves";
import { Weight } from "./Weight";
import { Height } from "./Height";
import { Abilities } from "./Abilities";
import { FilterContext } from "./FilterContext";
import { useContext } from "react";
import ReactModal from "react-modal";
import close from "./img/close.svg";

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
          position: "absolute",
          backgroundColor: "#2B314060",
        },
        content: {
          overflow: "hidden",
          padding: 0,
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
      <div className="h-full w-full absolute  bg-white bg-opacity-1">
        <div className="flex justify-between">
          <p className="text-2xl font-normal text-black pt-5 px-8">Filters</p>
          <img
            src={close}
            alt="close"
            className="px-5"
            onClick={() => setFilterModalIsOpen(false)}
          />
        </div>
        <Formik
          enableReinitialize={true}
          onSubmit={onSubmit}
          initialValues={filter}
        >
          <Form>
            <div className="px-8 max-h-form w-full overflow-y-auto">
              <Height />
              <div className="border border-dashed border-lightgrey w-full"></div>
              <Weight />
              <div className="border border-dashed border-lightgrey w-full"></div>
              <Type />
              <div className="border border-dashed border-lightgrey w-full"></div>
              <Moves filter={filter} />
              <div className="border border-dashed mt-6 border-lightgrey w-full"></div>

              <Abilities filter={filter} />
            </div>
            <div className="border border-black-50 w-full"></div>

            <div className="flex flex-col w-full h-navbarmodal bg-white items-end">
              <div className="flex h-full items-center px-4">
                <button
                  className=" font-bold text-sm text-primary py-3 px-4 rounded"
                  type="reset"
                  onClick={() => resetFilters()}
                >
                  Clear Filters
                </button>
                <button
                  type="submit"
                  className="bg-primary font-bold text-sm ml-1 text-white py-3 px-4 rounded"
                >
                  Show Results
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </ReactModal>
  );
};

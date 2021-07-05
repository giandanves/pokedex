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
import FieldWrapper from "./FieldWrapper";
import FilterFooter from "./FilterFooter";
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

  return (
    <ReactModal
      isOpen={filterModalIsOpen}
      bodyOpenClassName="body-open"
      className="Modal"
      overlayClassName="Overlay"
    >
      <div className="h-full w-full  bg-white bg-opacity-1">
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
            <div className="px-8 sm:max-h-form w-full overflow-y-auto">
              <Height />
              <FieldWrapper />

              <Weight />
              <FieldWrapper />
              <Type />
              <FieldWrapper />
              <Moves filter={filter} />
              <FieldWrapper className="mt-6" />

              <Abilities filter={filter} />
            </div>
            <div className="border border-black-50 w-full"></div>
            <FilterFooter />
          </Form>
        </Formik>
      </div>
    </ReactModal>
  );
};

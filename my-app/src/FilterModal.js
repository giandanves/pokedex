import { Formik, Form } from "formik";
import { Type } from "./TypeFilter";
import { Moves } from "./Moves";
import { Weight } from "./Weight";
import { Height } from "./Height";
import { Abilities } from "./Abilities";
import { FilterContext } from "./FilterContext";
import { useContext } from "react";
import ReactModal from "react-modal";
import FieldWrapper from "./FieldWrapper";
import FilterFooter from "./FilterFooter";
import ModalHeader from "./ModalHeader";
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
        <ModalHeader />
        <Formik
          enableReinitialize={true}
          onSubmit={onSubmit}
          initialValues={filter}
        >
          <Form>
            <div className="px-8  w-full overflow-y-auto">
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

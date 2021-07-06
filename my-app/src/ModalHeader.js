import close from "./img/close.svg";
import { useContext } from "react";
import { FilterContext } from "./FilterContext";

const ModalHeader = () => {
  const { setFilterModalIsOpen } = useContext(FilterContext);
  return (
    <div className="flex justify-between">
      <p className="text-2xl font-normal text-black pt-5 px-8">Filters</p>
      <img
        src={close}
        alt="close"
        className="px-5"
        onClick={() => setFilterModalIsOpen(false)}
      />
    </div>
  );
};

export default ModalHeader;

import { FilterContext } from "./FilterContext";
import { useContext } from "react";
import Button from "./Button";

const FilterFooter = () => {
  const { setOffset, setFilter } = useContext(FilterContext);
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

  const Paragrafh = (props) => {
    const { text } = props;
    return <p>{text}</p>;
  };

  return (
    <div className="flex flex-col w-full h-navbarmodal bg-white items-end">
      <div className="flex h-full items-center px-4">
        <Button
          children={<Paragrafh text={"Clear Filters"} />}
          textColor={"primary"}
          bg={"white"}
          type={"reset"}
          onClick={resetFilters}
        />
        <Button
          children={<Paragrafh text={"Show Results"} />}
          textColor={"white"}
          bg={"primary"}
          type={"submit"}
        />
      </div>
    </div>
  );
};

export default FilterFooter;

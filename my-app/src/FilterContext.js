import { createContext, useState } from "react";
const defaultUrl = process.env.REACT_APP_DEFAULT_URL;

export const FilterContext = createContext();

const FilterContextProvider = (props) => {
  let [url, setUrl] = useState(defaultUrl);
  const [limit, setLimit] = useState(12);
  const [offset, setOffset] = useState(0);
  const [filteredUrl, setFilteredUrl] = useState(url);
  const [teamsIsOpen, setTeamsIsOpen] = useState(false);
  const [filter, setFilter] = useState({
    height: [],
    weight: [],
    search: "",
    type: [],
    ability: [],
    move: [],
  });
  return (
    <FilterContext.Provider
      value={{
        url,
        setUrl,
        limit,
        setLimit,
        offset,
        setOffset,
        filter,
        setFilter,
        filteredUrl,
        setFilteredUrl,
        teamsIsOpen,
        setTeamsIsOpen,
      }}
    >
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;

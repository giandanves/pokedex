import { createContext, useState } from "react";
const defaultUrl = process.env.REACT_APP_DEFAULT_URL;

export const Context = createContext();

const ContextProvider = (props) => {
  let [url, setUrl] = useState(defaultUrl);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  return (
    <Context.Provider
      value={{ url, setUrl, limit, setLimit, offset, setOffset }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;

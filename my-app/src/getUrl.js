import queryString from "query-string";

export const getUrl = (values, url) => {
  return queryString.stringifyUrl({
    url: url,
    query: values,
  });
};

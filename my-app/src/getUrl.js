import queryString from "query-string";

export const getUrl = (filterParams) => {
  const { heights, weights, types, results, search, url } = filterParams;
  const searchBox = search;

  const typesCheckeds = results
    .map((type) => type.name)
    .filter((type, index) => types[index]);

  const heightCheckeds = heights
    .map((ht, i) => i)
    .filter((ht, index) => heights[index]);

  const weightCheckeds = weights
    .map((wt, i) => i)
    .filter((wt, index) => weights[index]);

  const queryObject = {
    search: searchBox,
    height: heightCheckeds,
    weight: weightCheckeds,
    type: typesCheckeds,
  };

  return queryString.stringifyUrl({
    url: url,
    query: queryObject,
  });
};

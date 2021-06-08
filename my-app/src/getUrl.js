const queryString = require("query-string");

export const getUrl = (height, weight, types, typeList, search, url) => {
  const searchBox = [];
  if (search) {
    searchBox.push(search);
  }

  const typesCheckeds = typeList
    .map((type) => type.name)
    .filter((type, index) => types[index]);

  const heightCheckeds = height
    .map((ht, i) => i)
    .filter((ht, index) => height[index]);

  const weightCheckeds = weight
    .map((wt, i) => i)
    .filter((wt, index) => weight[index]);

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

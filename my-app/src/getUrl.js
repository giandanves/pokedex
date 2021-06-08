const queryString = require("query-string");

export const getUrl = (height, weight, type, typeList, search, url) => {
  let heightCheckeds = [];
  let weightCheckeds = [];
  let typesCheckeds = [];
  let searchBox = [];
  if (search) {
    searchBox.push(search);
  }
  height.forEach((state, i) => {
    if (state) {
      heightCheckeds.push(i);
    }
  });
  weight.forEach((state, i) => {
    if (state) {
      weightCheckeds.push(i);
    }
  });
  type.forEach((state, i) => {
    if (state) {
      typesCheckeds.push(typeList[i].name);
    }
  });

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

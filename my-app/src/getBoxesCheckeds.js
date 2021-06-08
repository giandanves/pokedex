const queryString = require("query-string");

export const getBoxesChecked = (height, weight, type, typeList) => {
  let heightCheckeds = [];
  let weightCheckeds = [];
  let typesCheckeds = [];

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

  return queryString.stringify({
    height: [heightCheckeds],
    weight: [weightCheckeds],
    type: [typesCheckeds],
  });
};
